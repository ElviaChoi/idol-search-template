export type CardTypes = "idol";

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
}

export interface CardProps extends BaseCardProps {
  title: string;
  imageSrc?: string;
  idolGroup?: string;
  position?: string;
  idolId?: number;
  isFavorite?: boolean;
  toggleFavorite?: (id: number) => void;
  onClick?: () => void;
  className?: string;
}
