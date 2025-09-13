import { VirtuosoGrid } from "react-virtuoso";
import type { Idol } from "./types";

type Props = {
  items: Idol[];
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
};

export default function IdolSearchList({
  items,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: Props) {
  return (
    <VirtuosoGrid
      useWindowScroll
      data={items}
      computeItemKey={(_, it) => it.id}
      endReached={() => {
        if (!isFetchingNextPage && hasNextPage) fetchNextPage();
      }}
      components={{
        Footer: () =>
          isFetchingNextPage ? (
            <div className='col-span-full py-4 text-center text-fuchsia-400'>
              불러오는 중...
            </div>
          ) : null,
      }}
      listClassName='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
      itemContent={(_, it) => (
        <button
          className='border rounded-lg p-4 text-left hover:shadow'
          onClick={() => {}}
        >
          <div className='flex items-center gap-3'>
            <div className='size-12 rounded bg-gray-100' aria-hidden />
            <div className='flex-1'>
              <p className='font-medium'>{it.name}</p>
              <p className='text-sm text-gray-500'>{it.groupName ?? "-"}</p>
            </div>
          </div>
        </button>
      )}
    />
  );
}
