import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { ChaiCard } from './components/ChaiCard';
import Counter from './components/Counter';
import ChaiList from './components/ChaiList';
import OrderForm from './components/OrderForm';
const menu = [
    {
        id: 1,
        name: "Masala Chai",
        price: 234,
    },
    {
        id: 2,
        name: "Green Chai",
        price: 2.00,
    },
    {
        id: 3,
        name: "Ginger Chai",
        price: 4.50,
    },
    {
        id: 4,
        name: "Lemon Chai",
        price: 3.75,
    },
];
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(ChaiCard, { name: "Masala Chai", price: 234, isSpecial: true }), _jsx(ChaiCard, { name: "Green Chai", price: 2.00 }), _jsx("div", { children: _jsx(Counter, {}) }), _jsx(ChaiList, { items: menu }), _jsx(OrderForm, { onSubmit: (order) => {
                    console.log({ ...order });
                } })] }));
}
export default App;
//# sourceMappingURL=App.js.map