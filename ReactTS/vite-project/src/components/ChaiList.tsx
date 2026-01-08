import type { Chai } from "../types";
import { ChaiCard } from "./ChaiCard";

interface ChaiListProps {
  items: Chai[];
}
function ChaiList({ items }: ChaiListProps) {
  return (
    <div>
      {items.map((item) => (
        <ChaiCard
          name={item.name}
          key={item.id}
          price={item.price}
          isSpecial={item.price > 5}
        />
      ))}
    </div>
  );
}

export default ChaiList;
