import { useState, useMemo } from "react";
import type { ChangeEvent } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchIdols } from "./api";
import type { Idol } from "./types";
import SearchBar from "./SearchBar";
import { useDebounce } from "../../hooks/useDebounce";

export default function IdolSearchPage() {
  const [keyword, setKeyword] = useState("");
  const debounced = useDebounce(keyword, 300);

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

  const items: Idol[] = useMemo(
    () => data?.pages.flatMap((p) => p.items) ?? [],
    [data]
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  return (
    <div className='mx-auto max-w-6xl px-4 py-10'>
      <h1 className='text-2xl font-bold text-center'>아이돌 검색</h1>

      <div className='mt-6'>
        <SearchBar inputValue={keyword} onInputChange={onChange} />
      </div>

      <div className='mt-8 min-h-40'>
        {isLoading && (
          <p className='text-center text-fuchsia-400'>불러오는 중...</p>
        )}
        {isError && (
          <p className='text-center text-fuchsia-800'>에러가 발생했습니다.</p>
        )}
        {!isLoading && !isError && debounced && items.length === 0 && (
          <p className='text-center text-fuchsia-400'>검색 결과가 없습니다.</p>
        )}

        {!isLoading && !isError && items.length > 0 && (
          <IdolSearchList
            items={items}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        )}
      </div>
    </div>
  );
}

import IdolSearchList from "./IdolSearchList";
