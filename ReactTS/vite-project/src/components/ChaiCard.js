import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ChaiCard({ name, price, isSpecial = false }) {
    return (_jsxs("article", { children: [_jsx("h2", { children: name }), _jsxs("p", { children: ["Price: ", price] }), isSpecial && _jsx("strong", { children: "Special Offer!" })] }));
}
//# sourceMappingURL=ChaiCard.js.map