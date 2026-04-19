export interface SpotifyImage {
  url: string;
  width: number;
  height: number;
}

export interface SpotifyArtist {
  name: string;
  external_urls: { spotify: string };
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album: {
    name: string;
    images: SpotifyImage[];
  };
  external_urls: { spotify: string };
  duration_ms: number;
}

export interface NowPlayingTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string | null;
  songUrl: string;
  playedAt?: string;
}

export interface TopTrack {
  rank: number;
  title: string;
  artist: string;
  albumImageUrl: string | null;
  songUrl: string;
}
