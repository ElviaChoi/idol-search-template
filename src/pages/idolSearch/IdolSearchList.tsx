import Card from "../../components/common/card";
import type { Idol } from "./types";
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
  onCardClick,
  toggleFavorite,
}: Props) {
  const { favoriteIds } = useFavoriteStore();

  return (
    <div className='grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-3 lg:gap-y-10'>
      {idols.map((idol) => (
        <div key={idol.id} className='flex items-center justify-center p-2'>
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
      ))}
    </div>
  );
}
