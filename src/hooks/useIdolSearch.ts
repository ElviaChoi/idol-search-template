import { useState, useMemo } from "react";
import type { ChangeEvent } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchIdols } from "@/pages/idolSearch";
import type { Idol } from "@/pages/idolSearch";
import { useDebounce } from "@/hooks";
import { DEBOUNCE_DELAY_MS } from "@/constants";

export function useIdolSearch() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, DEBOUNCE_DELAY_MS);

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["idols", "search", debouncedKeyword],
    enabled: debouncedKeyword.trim().length > 0,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => searchIdols(debouncedKeyword, pageParam),
    getNextPageParam: (last) => last.nextPage ?? undefined,
  });

  const searchedItems: Idol[] = useMemo(
    () => data?.pages.flatMap((p) => p.items) ?? [],
    [data]
  );

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const isSearching = debouncedKeyword.trim().length > 0;

  return {
    keyword,
    debouncedKeyword,
    searchedItems,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    onChangeKeyword,
    isSearching,
  };
}
