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

class Chai{
    public flavor: string = 'Masala';
    private secretIngredients = "Cardamom";

    revealSecret(){
        return `The secret ingredient is ${this.secretIngredients}`;
    }

    
}
// const chai = new Chai();
// console.log(chai.flavor);
// // console.log(chai.secretIngredients); // Error: Property

class ShopName{
    protected shopName = "Chai Point";
}
class Branch extends ShopName{
    getShopName(){
        return `Welcome to ${this.shopName}`;
    }
}

class Wallet{
    #walletAmount = 100;
    getBalance(){  
        return this.#walletAmount;
    }
}

const w = new Wallet();
w.getBalance();
// w.#walletAmount // Error: Private field '#walletAmount' must be declared in an enclosing class 

class Cup {
    readonly capacity: number = 250;
    constructor(capacity:number){
        this.capacity = capacity;
    }
}

class ModernChai{
    private _sugar = 2;
    get sugar(){
        return this._sugar;
    }
    set sugar(value:number){
        if (value < 0){
            throw new Error("Sugar level cannot be negative");
        }
        this._sugar = value;
    }
}

const s = new ModernChai();
s.sugar = 3;
console.log(s.sugar);// it can be same function name sugar but one is getter and another is setter

class ExChai{
    static shopName = "Chai Sutta Bar";

    constructor(public flavor:string){

    }   
}

console.log(ExChai.shopName);

abstract class Drink{
    abstract make():void;
}

class MyChai extends Drink{
    make(){
        console.log("Making chai...");
    }   
}

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}
    makeChai(){
        this.heater.heat();
        console.log("Chai is made.");
    }
} // composition over inheritance 


