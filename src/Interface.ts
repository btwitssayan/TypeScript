interface chai{
    flavor: string;
    price: number;
    milk?: boolean;
}

const masalaChai: chai = {
    flavor: "Masala",
    price: 10
};

interface ChaiShop{
    readonly id: number;
    name: string;
}

const s: ChaiShop = {
    id: 1,
    name: "Chai Point"
};

// s.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

interface DiscountCalculator{
    (price:number): number;
}

const apply50: DiscountCalculator = (price) => price * 0.5;

interface TeaMachine{
    start():void;
    stop():void;
}

const machine: TeaMachine = {
    start(){
        console.log("Tea Machine Started");
    },
    stop(){
        console.log("Tea Machine Stopped");
    }
}

interface ChaiRating{
    [flavour:string]: number;
}

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
const ratings: ChaiRating = {
    "Masala": 4.5,
    "Ginger": 4.0,
    "Elaichi": 4.8
}; // Index Signature 

interface User{
    name: string;
}

interface User{
    age: number;
}

const u : User = {
    name: "Admin",
    age: 30
}

interface A{
    a: string;
}
interface B{
    b: string;
}
interface C extends A, B{
    c: string;
}