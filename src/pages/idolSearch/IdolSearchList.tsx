import { VirtuosoGrid } from "react-virtuoso";
import Card from "../../components/common/card/Card";
import type { Idol } from "./types";
import { useFavoriteStore } from "../../store/favorites";
import GridFooter from "../../components/GridFooter";

type Props = {
  idols: Idol[];
  isSearching: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  // onCardClick: (id: number) => void;
};

export default function IdolSearchList({
  idols,
  // onCardClick,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: Props) {
  const { favoriteIds, toggleFavorite } = useFavoriteStore();

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <VirtuosoGrid
      useWindowScroll
      data={idols}
      endReached={loadMore}
      overscan={20}
      context={{ isFetchingNextPage }}
      components={{
        List: (props) => (
          <div
            {...props}
            className='grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-3 lg:gap-y-10'
          />
        ),
        Item: (props) => (
          <div {...props} className='flex items-center justify-center p-2' />
        ),
        Footer: GridFooter,
      }}
      itemContent={(_index, idol) => (
        <Card
          idolId={Number(idol.id)}
          title={idol.name}
          imageSrc={idol.avatarUrl || ""}
          isFavorite={favoriteIds.includes(idol.id)}
          detail={{
            idolGroup: idol.groupName ?? "",
            position: idol.position ?? "",
          }}
          // onClick={() => onCardClick(Number(idol.id))}
          toggleFavorite={toggleFavorite}
        />
      )}
    />
  );
}
