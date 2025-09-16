import { http, HttpResponse, delay } from "msw";
import { REAL_IDOLS, type Idol as RealIdol } from "../data/realIdols";
import { PAGE_SIZE, API_DELAY_MS } from "../../constants";

const TRAINEE_COUNT = 800;

const getAvatarUrl = (name: string, id: number) =>
  `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${encodeURIComponent(
    name
  )}-${id}`;

type Idol = RealIdol;
const POSITIONS_KO = ["보컬", "댄스", "랩", "센터"];

function makeTrainees(): Idol[] {
  const POSITIONS = ["보컬", "댄스", "랩", "센터"];
  const list: Idol[] = [];
  for (let i = 1; i <= TRAINEE_COUNT; i++) {
    const id = 1000 + i;
    const name = `연습생${i}`;
    list.push({
      id,
      name,
      groupName: "연습생",
      position: POSITIONS[i % POSITIONS.length],
      avatarUrl: getAvatarUrl(name, id),
    });
  }
  return list;
}

const ALL_IDOLS: Idol[] = [
  ...REAL_IDOLS.map((i, idx) => ({
    ...i,
    position: i.position ?? POSITIONS_KO[idx % POSITIONS_KO.length],
    avatarUrl: i.avatarUrl?.trim() ? i.avatarUrl : getAvatarUrl(i.name, i.id),
  })),
  ...makeTrainees(),
];

export const handlers = [
  http.get("/api/idols", () => {
    return HttpResponse.json(ALL_IDOLS);
  }),
  http.get("/api/idols/search", async ({ request }) => {
    await delay(API_DELAY_MS);
    const url = new URL(request.url);
    const keyword = (url.searchParams.get("keyword") || "")
      .trim()
      .toLowerCase();
    const page = Number(url.searchParams.get("page") || "1");

    if (!keyword)
      return HttpResponse.json({ items: [], nextPage: null, total: 0 });

    const filtered = ALL_IDOLS.filter(
      (i) =>
        i.name.toLowerCase().includes(keyword) ||
        (i.groupName || "").toLowerCase().includes(keyword)
    ).sort((a, b) => a.name.localeCompare(b.name));

    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    return HttpResponse.json({
      items: filtered.slice(start, end),
      nextPage: end < filtered.length ? page + 1 : null,
      total: filtered.length,
    });
  }),
];
