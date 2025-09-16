export type CardTypes = "idol";

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: CardTypes;
}

export interface CardProps extends BaseCardProps {
  title: string;
  imageSrc?: string;
  detail: { idolGroup?: string; position?: string };
  idolId?: number;
  isFavorite?: boolean;
  toggleFavorite?: (id: number) => void;
}
