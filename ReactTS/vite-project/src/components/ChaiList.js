import { jsx as _jsx } from "react/jsx-runtime";
import { ChaiCard } from "./ChaiCard";
function ChaiList({ items }) {
    return (_jsx("div", { children: items.map((item) => (_jsx(ChaiCard, { name: item.name, price: item.price, isSpecial: item.price > 5 }, item.id))) }));
}
export default ChaiList;
//# sourceMappingURL=ChaiList.js.map