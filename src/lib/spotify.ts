import type { NowPlayingTrack, SpotifyTrack, TopTrack } from "@/types/spotify";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const TOP_TRACKS = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5";

interface SpotifyConfig {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}

function getConfig(): SpotifyConfig | null {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;
  return { clientId, clientSecret, refreshToken };
}

async function getAccessToken(cfg: SpotifyConfig): Promise<string | null> {
  const basic = Buffer.from(`${cfg.clientId}:${cfg.clientSecret}`).toString("base64");
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: cfg.refreshToken,
    }),
    next: { revalidate: 30 },
  });
  if (!res.ok) return null;
  const json = (await res.json()) as { access_token?: string };
  return json.access_token ?? null;
}

export async function getNowPlaying(): Promise<NowPlayingTrack | null> {
  const cfg = getConfig();
  if (!cfg) return null;

  const token = await getAccessToken(cfg);
  if (!token) return null;

  const res = await fetch(NOW_PLAYING, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 30 },
  });

  if (res.status === 204 || res.status > 400) {
    return getLastPlayed(token);
  }

  const data = (await res.json()) as {
    is_playing?: boolean;
    item?: SpotifyTrack | null;
  };

  if (!data.item) return getLastPlayed(token);

  return {
    isPlaying: Boolean(data.is_playing),
    title: data.item.name,
    artist: data.item.artists.map((a) => a.name).join(", "),
    album: data.item.album.name,
    albumImageUrl: data.item.album.images[0]?.url ?? null,
    songUrl: data.item.external_urls.spotify,
  };
}

async function getLastPlayed(token: string): Promise<NowPlayingTrack | null> {
  const res = await fetch(RECENTLY_PLAYED, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as {
    items?: Array<{ track: SpotifyTrack; played_at: string }>;
  };
  const first = data.items?.[0];
  if (!first) return null;
  return {
    isPlaying: false,
    title: first.track.name,
    artist: first.track.artists.map((a) => a.name).join(", "),
    album: first.track.album.name,
    albumImageUrl: first.track.album.images[0]?.url ?? null,
    songUrl: first.track.external_urls.spotify,
    playedAt: first.played_at,
  };
}

export async function getTopTracks(): Promise<TopTrack[]> {
  const cfg = getConfig();
  if (!cfg) return [];
  const token = await getAccessToken(cfg);
  if (!token) return [];
  const res = await fetch(TOP_TRACKS, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  const data = (await res.json()) as { items?: SpotifyTrack[] };
  return (data.items ?? []).map((t, i) => ({
    rank: i + 1,
    title: t.name,
    artist: t.artists.map((a) => a.name).join(", "),
    albumImageUrl: t.album.images[0]?.url ?? null,
    songUrl: t.external_urls.spotify,
  }));
}
