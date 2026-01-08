const chai = {
    name: "masala chai",
    price: 20,
    isHot: true,
};
let tea;
tea = {
    name: "ginger chai",
    price: 15,
    isHot: false,
};
const adrakChai = {
    name: "adrak chai",
    price: 25,
    ingredients: ["tea leaves", "ginger", "water", "milk", "sugar"],
};
let smallCup = {
    size: "200ml",
};
let largeCup = {
    size: "500ml",
    material: "plastic",
};
smallCup = largeCup; //valid assignment because smallCup structure is present in largeCup structure
const coffee = { brewTime: 5, beans: "africa" };
const chaiBrew = coffee; //valid assignment because chaiBrew structure is present in coffee structure
const user1 = {
    username: "tea_lover",
    age: 25,
};
const placeOrder = (order) => {
    console.log("placing order...", order);
};
placeOrder({ name: "masala chai", quantity: 2 });
const chaiInfo = {
    name: "masala chai",
    price: 20,
};
export {};
//# sourceMappingURL=objectTs.js.map