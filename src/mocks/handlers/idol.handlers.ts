import { http, HttpResponse } from "msw";
import idols from "../data/idols.json";

const PAGE_SIZE = 20;

export const handlers = [
  http.get("/api/idols/search", ({ request }) => {
    const url = new URL(request.url);
    const keyword = (url.searchParams.get("keyword") || "")
      .toLowerCase()
      .trim();
    const page = Number(url.searchParams.get("page") || "1");

    const filtered = idols
      .filter(
        (i) =>
          keyword &&
          ((i.name || "").toLowerCase().includes(keyword) ||
            (i.groupName || "").toLowerCase().includes(keyword))
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    return HttpResponse.json({
      items: filtered.slice(start, end),
      nextPage: end < filtered.length ? page + 1 : null,
      total: filtered.length,
    });
  }),
];
