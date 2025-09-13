import IdolCard from "./IdolCard";
import type { IdolCardProps } from "./card.types";

type CardProps = { type: "idol" } & Omit<IdolCardProps, "type">;

export default function Card(props: CardProps) {
  const { type, ...rest } = props as any;
  if (type === "idol") return <IdolCard {...(rest as IdolCardProps)} />;
  return null;
}
