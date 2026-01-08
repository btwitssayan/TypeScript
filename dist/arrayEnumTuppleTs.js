const chaiFlavour = ['Masala', 'Ginger', 'Elaichi', 'Lemon'];
const chaiPrice = [10, 20];
const rating = [4.5, 4.0, 3.5];
const menu = [
    { name: 'Masala', price: 10 },
    { name: 'Ginger', price: 15 },
    { name: 'Elaichi', price: 20 }
];
const cities = ['Delhi', 'Mumbai', 'Chennai'];
// cities.push('Pune'); // Error: Cannot add to readonly array
const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let chaiType;
chaiType = ['Masala', 2, true];
// chaiType= [20, 'Ginger', false]; // Error: Type 'number' is not assignable to type 'string'.
let userInfo;
userInfo = ['Admin', 1, true];
userInfo = ['Guest', 2];
// userInfo = [1, 'Admin']; // Error: Type 'number' is not assignable to type 'string'.
const locations = [28.6139, 77.2090];
const chaiItems = [
    ['Masala', 10],
    ['Ginger', 15],
    ['Elaichi', 20]
];
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.MEDIUM;
var status;
(function (status) {
    status[status["PENDING"] = 100] = "PENDING";
    status[status["SERVED"] = 101] = "SERVED";
    status[status["CANCELLED"] = 102] = "CANCELLED"; //102
})(status || (status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "Masala";
    ChaiType["GINGER"] = "Ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making ${type} chai`);
}
makeChai(ChaiType.GINGER);
// makeChai("Lemon") // Error: Argument of type '"Lemon"' is not assignable to parameter of type 'ChaiType'.
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["A"] = 5] = "A";
    RandomEnum["B"] = "Hello";
    RandomEnum[RandomEnum["C"] = 10] = "C";
    RandomEnum["D"] = "World";
})(RandomEnum || (RandomEnum = {}));
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
const s = Sugars.MEDIUM;
let t = ['Chai', 10];
t.push(20); // Allowed, push is allowed even in tuple
export {};
// t[2] = true; // Error: Type 'boolean' is not assignable to type 'number | string'.
//# sourceMappingURL=arrayEnumTuppleTs.js.map