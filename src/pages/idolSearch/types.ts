export type Idol = {
  id: number;
  name: string;
  groupName?: string;
  position?: string;
  avatarUrl?: string;
};

export type SearchResponse = {
  items: Idol[];
  nextPage: number | null;
  total: number;
};
