import { VirtuosoGrid } from "react-virtuoso";
import Card from "../../components/common/card";
import type { Idol } from "./types";
import GridFooter from "../../components/GridFooter";
import { useFavoriteStore } from "../../store/favorites";

type Props = {
  idols: Idol[];
  isSearching: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  onCardClick: (id: number) => void;
  toggleFavorite: (id: number) => void;
};

export default function IdolSearchList({
  idols,
  isSearching,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  onCardClick,
  toggleFavorite,
}: Props) {
  const { favoriteIds } = useFavoriteStore();

  const renderItem = (_: number, idol: Idol) => (
    <div className='flex items-center justify-center p-2'>
      <Card
        type='idol'
        idolId={Number(idol.id)}
        title={idol.name}
        imageSrc={idol.avatarUrl || ""}
        isFavorite={favoriteIds.includes(idol.id)}
        detail={{
          idolGroup: idol.groupName ?? "",
          position: idol.position ?? "",
        }}
        onClick={() => onCardClick(Number(idol.id))}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );

  return (
    <VirtuosoGrid
      useWindowScroll
      data={idols}
      computeItemKey={(_, idol) => idol.id}
      endReached={() => {
        if (isSearching && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}
      increaseViewportBy={isSearching ? { top: 0, bottom: 100 } : undefined}
      overscan={2}
      components={{ Footer: GridFooter }}
      context={{ isFetchingNextPage }}
      listClassName='grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-3 lg:gap-y-10'
      itemContent={renderItem}
    />
  );
}
