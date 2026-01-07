const chai = {
  name: "masala chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "ginger chai",
  price: 15,
  isHot: false,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "adrak chai",
  price: 25,
  ingredients: ["tea leaves", "ginger", "water", "milk", "sugar"],
};

type Cup = {
  size: string;
};
let smallCup: Cup = {
  size: "200ml",
};
let largeCup = {
  size: "500ml",
  material: "plastic",
};

smallCup = largeCup; //valid assignment because smallCup structure is present in largeCup structure

type Brew = {
  brewTime: number;
};

const coffee = { brewTime: 5, beans: "africa" };
const chaiBrew: Brew = coffee; //valid assignment because chaiBrew structure is present in coffee structure

type User = {
  username: string;
  age: number;
};

const user1: User = {
  username: "tea_lover",
  age: 25,
};

type Item = {
  name: string;
  quantity: number;
};
type Address = {
  street: string;
  pin: number;
};

type Order = {
  id: string;
  item: Item[];
  address: Address;
};

// type Chai = {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

// const updateChai = (updates: Partial<Chai>)=>{
//     console.log("updating chai...", updates)
// }

// updateChai({price:30, isHot:false});
// updateChai({name:"lemon chai"});
// updateChai({}); //valid as all properties are optional in Partial<T>

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log("placing order...", order);
};

placeOrder({ name: "masala chai", quantity: 2 });
// placeOrder({name:"ginger chai"}); //error as all properties are required in Required<T>

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "masala chai",
  price: 20,
};

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type PublicChai = Omit<ChaiNew, "ingredients">;