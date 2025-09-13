import type { SearchResponse } from "./types";

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
