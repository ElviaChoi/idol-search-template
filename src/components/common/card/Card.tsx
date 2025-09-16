import { HeartIcon, UserIcon } from "@heroicons/react/24/outline";
import type { CardProps } from "@/components/common/card/card.types";
import { cn } from "@/utils";

export default function Card({
  imageSrc = "",
  title,
  idolGroup,
  position,
  isFavorite,
  onClick,
  className,
  idolId,
  toggleFavorite,
  ...rest
}: CardProps) {
  const handleClickLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof idolId === 'number') {
      toggleFavorite?.(idolId);
    }
  };

  return (
    <div
      className={cn(`group relative w-72 aspect-[3/4] cursor-pointer overflow-hidden rounded-lg shadow-md`, className)}
      {...rest}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className={cn('absolute inset-0 h-full w-full object-cover')}
          loading='lazy'
        />
      ) : (
        <div className={cn('absolute inset-0 flex items-center justify-center bg-neutral-200')}>
          <UserIcon className={cn('h-20 w-20 text-neutral-500')} />
        </div>
      )}

      <button
        type='button'
        onClick={handleClickLike}
        className={cn('absolute right-3 top-3 z-10')}
        aria-label={isFavorite ? "利寃⑥갼湲 댁" : "利寃⑥갼湲 異媛"}
      >
        <HeartIcon
          className={cn(`h-10 w-10 drop-shadow`, isFavorite ? "fill-fuchsia-500 text-fuchsia-700" : "text-fuchsia-400")}
        />
      </button>

      <div className={cn('pointer-events-none absolute inset-0 flex items-end bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100')}>
        <div className={cn('w-full p-4 text-center text-white')}>
          <h4 className={cn('text-lg font-semibold')}>{title}</h4>
          <div className={cn('mt-1 text-sm text-gray-200')}>
            <p>그룹 : {idolGroup ?? "-"}</p>
            <p>포지션 : {position ?? "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
