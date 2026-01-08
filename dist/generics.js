function warpInArray(item) {
    return [item];
}
warpInArray("Chai");
warpInArray(10);
warpInArray({ flavor: "Masala", price: 10 });
function pair(first, second) {
    return [first, second];
}
pair("masala", 10);
pair(true, { flavor: "Ginger", price: 15 });
const numberBox = {
    contents: 42
};
const stringBox = {
    contents: "Hello, Generics!"
};
const res = {
    status: 200,
    data: {
        flavor: "Masala",
        price: 10
    }
};
export {};
//# sourceMappingURL=generics.js.map