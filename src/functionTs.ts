function makeChai(type: string, cups: number): string {
    return `Making ${cups} cups of ${type} chai.`
}

makeChai("masala", 2);

function getChaiPrice(): number{
    return 50;
}

function makeOrder(order: string){
    if (!order) return null;
    return order;
}

function logChai():void{
    console.log("Chai is ready!");
}

// function orderChai(type?:string){

// }

function orderChai(type:string="masala"){
    
}

function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "medium" | "large";
}):number {
    return 100;
}