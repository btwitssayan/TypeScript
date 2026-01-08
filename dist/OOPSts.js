// class Chai{
//     flavor: string;
//     price: number;
//     // constructor(flavour:string, price:number){
//     //     this.flavor = flavour;
//     //     this.price = price;
//     // }
//     constructor(flavour:string,){
//         this.flavor = flavour;
//         console.log(this);
//     }
// }
// const masalaChai = new Chai('Ginger');
// masalaChai.flavor = "Masala";
class Chai {
    flavor = 'Masala';
    secretIngredients = "Cardamom";
    revealSecret() {
        return `The secret ingredient is ${this.secretIngredients}`;
    }
}
// const chai = new Chai();
// console.log(chai.flavor);
// // console.log(chai.secretIngredients); // Error: Property
class ShopName {
    shopName = "Chai Point";
}
class Branch extends ShopName {
    getShopName() {
        return `Welcome to ${this.shopName}`;
    }
}
class Wallet {
    #walletAmount = 100;
    getBalance() {
        return this.#walletAmount;
    }
}
const w = new Wallet();
w.getBalance();
// w.#walletAmount // Error: Private field '#walletAmount' must be declared in an enclosing class 
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value < 0) {
            throw new Error("Sugar level cannot be negative");
        }
        this._sugar = value;
    }
}
const s = new ModernChai();
s.sugar = 3;
console.log(s.sugar); // it can be same function name sugar but one is getter and another is setter
class ExChai {
    flavor;
    static shopName = "Chai Sutta Bar";
    constructor(flavor) {
        this.flavor = flavor;
    }
}
console.log(ExChai.shopName);
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Making chai...");
    }
}
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    makeChai() {
        this.heater.heat();
        console.log("Chai is made.");
    }
} // composition over inheritance 
export {};
//# sourceMappingURL=OOPSts.js.map