import { NextRequest, NextResponse } from "next/server";

type NominatimResult = {
  lat: string;
  lon: string;
  display_name: string;
};

export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get("address")?.trim();
  if (!address) {
    return NextResponse.json({ message: "주소를 입력해 주세요." }, { status: 400 });
  }

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("q", address);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");
  url.searchParams.set("accept-language", "ko");

  const response = await fetch(url, {
    headers: { "User-Agent": "trip-talk-learning-project/1.0" },
    cache: "no-store",
  });
  const results = (await response.json()) as NominatimResult[];
  const result = results[0];

  if (!result) {
    return NextResponse.json(
      { message: "주소에 해당하는 위치를 찾지 못했습니다." },
      { status: 404 },
    );
  }

  return NextResponse.json({
    latitude: Number(result.lat),
    longitude: Number(result.lon),
    displayName: result.display_name,
  });
}
