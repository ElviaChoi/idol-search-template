import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllIdols } from "./api";
import SearchBar from "./SearchBar";
import IdolSearchList from "./IdolSearchList";
import { useFavoriteStore } from "../../store/favorites";
import IdolSearchStatus from "./IdolSearchStatus";
import { useIdolSearch } from "../../hooks/useIdolSearch";

export default function IdolSearchPage() {
  const { favoriteIds } = useFavoriteStore();

  const { data: allIdols = [] } = useQuery({
    queryKey: ["idols"],
    queryFn: getAllIdols,
  });

  const {
    keyword,
    searchedItems,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    onChangeKeyword,
    isSearching,
  } = useIdolSearch();

  const favoritedItems = useMemo(
    () => allIdols.filter((idol) => favoriteIds.includes(idol.id)),
    [allIdols, favoriteIds]
  );

  const items = isSearching ? searchedItems : favoritedItems;

  return (
    <div className={`mx-auto max-w-6xl px-4 py-16 min-h-[calc(100vh-12rem)]`}>
      <h1 className='text-2xl font-bold text-center mt-4'>아이돌 검색하기</h1>

      <div className='mt-12'>
        <SearchBar inputValue={keyword} onInputChange={onChangeKeyword} />
      </div>

      <div
        className={`${isSearching ? "mt-8" : "mt-16"} ${
          items.length === 0 ? "pt-7" : ""
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
          />
        )}
      </div>
    </div>
  );
}
