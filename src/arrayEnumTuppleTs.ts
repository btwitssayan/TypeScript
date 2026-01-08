const chaiFlavour : string[] = ['Masala', 'Ginger', 'Elaichi', 'Lemon'];
const chaiPrice: number[] = [10,20];

const rating: Array<number> = [4.5, 4.0, 3.5];

type Chai={
    name:string;
    price:number;
}

const menu: Chai[] = [
    {name:'Masala', price:10},
    {name:'Ginger', price:15},
    {name:'Elaichi', price:20}
];

const cities: readonly string[] = ['Delhi', 'Mumbai', 'Chennai'];

// cities.push('Pune'); // Error: Cannot add to readonly array

const table:number[][]=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let chaiType:[string, number, boolean];
chaiType = ['Masala', 2, true];
// chaiType= [20, 'Ginger', false]; // Error: Type 'number' is not assignable to type 'string'.

let userInfo: [string, number, boolean?];
userInfo = ['Admin', 1, true];
userInfo = ['Guest', 2];
// userInfo = [1, 'Admin']; // Error: Type 'number' is not assignable to type 'string'.

const locations: readonly [number, number] = [28.6139, 77.2090];

const chaiItems:[name:string, price:number][] = [
    ['Masala', 10],
    ['Ginger', 15],
    ['Elaichi', 20]
];

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.MEDIUM;

enum status{
    PENDING=100,
    SERVED, //101
    CANCELLED //102
}

enum ChaiType{
    MASALA="Masala",
    GINGER="Ginger",
}

function makeChai(type: ChaiType){
    console.log(`Making ${type} chai`);
}

makeChai(ChaiType.GINGER)
// makeChai("Lemon") // Error: Argument of type '"Lemon"' is not assignable to parameter of type 'ChaiType'.

enum RandomEnum{
    A=5,
    B="Hello",
    C=10,
    D="World"
}

const enum Sugars{
    LOW =1,
    MEDIUM=2,
    HIGH=3
}

const s = Sugars.MEDIUM;

let t:[string,number] = ['Chai', 10];
t.push(20); // Allowed, push is allowed even in tuple
// t[2] = true; // Error: Type 'boolean' is not assignable to type 'number | string'.