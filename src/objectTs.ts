const chai = {
    name:"masala chai",
    price:20,
    isHot:true
}

let tea:{
    name:string,
    price:number,
    isHot:boolean
}

tea = {
    name:"ginger chai",
    price:15,
    isHot:false
}

type Tea = {
    name:string,
    price:number,
    ingredients:string[]
}

const adrakChai:Tea ={
    name:"adrak chai",
    price:25,
    ingredients:["tea leaves","ginger","water","milk","sugar"]
}

type Cup = {
    size:string,}
let smallCup:Cup = {
    size:"200ml"
}
let largeCup = {
    size:"500ml",
    material:"plastic"
}

smallCup = largeCup; //valid assignment because smallCup structure is present in largeCup structure

type Brew = {
    brewTime:number
}

const coffee = {brewTime:5,beans:"africa"}
const chaiBrew:Brew = coffee; //valid assignment because chaiBrew structure is present in coffee structure

type 