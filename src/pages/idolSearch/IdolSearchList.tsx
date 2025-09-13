import { VirtuosoGrid } from "react-virtuoso";
import Card from "../../components/common/card";
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
        <div className='flex items-center justify-center p-2'>
          <Card
            type='idol'
            idolId={Number(it.id)}
            title={it.name}
            imageSrc={it.avatarUrl || ""}
            detail={{
              idolGroup: it.groupName ?? "",
              position: it.position ?? "",
            }}
          />
        </div>
      )}
    />
  );
}
