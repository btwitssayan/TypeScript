const masalaChai = {
    flavor: "Masala",
    price: 10
};
const s = {
    id: 1,
    name: "Chai Point"
};
const apply50 = (price) => price * 0.5;
const machine = {
    start() {
        console.log("Tea Machine Started");
    },
    stop() {
        console.log("Tea Machine Stopped");
    }
};
/**
 * Ratings for different types of chai beverages.
 *
 * @remarks
 * This object uses an index signature, which allows properties with string keys
 * to be added dynamically without explicitly defining each property beforehand.
 * The index signature `[key: string]: number` means any string key can be assigned
 * a numeric rating value.
 *
 * @example
 * ```ts
 * const rating = ratings["Masala"]; // 4.5
 * ratings["Hibiscus"] = 3.9; // Can add new types dynamically
 * ```
 */
const ratings = {
    "Masala": 4.5,
    "Ginger": 4.0,
    "Elaichi": 4.8
}; // Index Signature 
const u = {
    name: "Admin",
    age: 30
};
export {};
//# sourceMappingURL=Interface.js.map