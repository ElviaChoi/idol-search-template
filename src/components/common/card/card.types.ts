export type CardTypes = "idol";

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: CardTypes;
}

export interface IdolCardProps extends BaseCardProps {
  title: string;
  imageSrc?: string;
  detail: { idolGroup?: string; position?: string };
  idolId?: number;
  toggleFavorite?: (id: number) => void;
}
