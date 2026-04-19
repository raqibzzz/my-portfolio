import { NextResponse } from "next/server";
import { getTopTracks } from "@/lib/spotify";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export async function GET() {
  const data = await getTopTracks();
  return NextResponse.json(
    { data },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
