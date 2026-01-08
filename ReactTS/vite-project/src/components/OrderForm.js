import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
function OrderForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [cups, setCups] = useState(1);
    function handelSubmit(e) {
        e.preventDefault();
        onSubmit({ name, cups });
    }
    return (_jsxs("form", { onSubmit: handelSubmit, children: [_jsxs("div", { children: [_jsx("label", { children: "Name:" }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { children: "Number of Cups:" }), _jsx("input", { type: "number", value: cups, onChange: (e) => setCups(Number(e.target.value)), min: 1 })] }), _jsx("button", { type: "submit", children: "Place Order" })] }));
}
export default OrderForm;
//# sourceMappingURL=OrderForm.js.map