import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: "Counter" }), _jsxs("div", { children: ["Current count: ", count] }), _jsx("button", { onClick: () => setCount(count + 1), children: "Order one more" })] }));
}
export default Counter;
//# sourceMappingURL=Counter.js.map