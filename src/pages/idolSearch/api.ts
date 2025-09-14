import type { Idol, SearchResponse } from "./types";

export async function getAllIdols(): Promise<Idol[]> {
  const res = await fetch(`/api/idols`);
  if (!res.ok) {
    throw new Error(`Failed to fetch all idols: ${res.status}`);
  }
  return res.json();
}

export async function searchIdols(
  keyword: string,
  page: number
): Promise<SearchResponse> {
  const params = new URLSearchParams({
    keyword,
    page: String(page),
  });
  const res = await fetch(`/api/idols/search?${params.toString()}`);
  if (!res.ok) {
    throw new Error(`Failed to search idols: ${res.status}`);
  }
  return res.json();
}
