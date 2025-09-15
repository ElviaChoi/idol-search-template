import { useState, useMemo } from "react";
import type { ChangeEvent } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { searchIdols, getAllIdols } from "./api";
import type { Idol } from "./types";
import SearchBar from "./SearchBar";
import { useDebounce } from "../../hooks/useDebounce";
import IdolSearchList from "./IdolSearchList";
import { useFavoriteStore } from "../../store/favorites";
import IdolSearchStatus from "./IdolSearchStatus";

export default function IdolSearchPage() {
  const [keyword, setKeyword] = useState("");
  const debounced = useDebounce(keyword, 300);
  const { favoriteIds, toggleFavorite } = useFavoriteStore();

  const { data: allIdols = [] } = useQuery({
    queryKey: ["idols"],
    queryFn: getAllIdols,
  });

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["idols", "search", debounced],
    enabled: debounced.trim().length > 0,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => searchIdols(debounced, pageParam),
    getNextPageParam: (last) => last.nextPage ?? undefined,
  });

  const searchedItems: Idol[] = useMemo(
    () => data?.pages.flatMap((p) => p.items) ?? [],
    [data]
  );

  const favoritedItems = useMemo(
    () => allIdols.filter((idol) => favoriteIds.includes(idol.id)),
    [allIdols, favoriteIds]
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const isSearching = debounced.trim().length > 0;
  const items = isSearching ? searchedItems : favoritedItems;

  return (
    <div className='mx-auto max-w-6xl px-4 py-10 min-h-[calc(100vh-15rem)]'>
      <h1 className='text-2xl font-bold text-center'>아이돌 검색</h1>

      <div className='mt-6'>
        <SearchBar inputValue={keyword} onInputChange={onChange} />
      </div>

      <div
        className={`${items.length === 0 ? "min-h-40" : ""} ${
          isSearching ? "mt-8" : "mt-16"
        }`}
      >
        <IdolSearchStatus
          isLoading={isLoading}
          isError={isError}
          isSearching={isSearching}
          itemCount={items.length}
        />

        {!isLoading && !isError && items.length > 0 && (
          <IdolSearchList
            idols={items}
            isSearching={isSearching}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            onCardClick={() => {}}
            toggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </div>
  );
}