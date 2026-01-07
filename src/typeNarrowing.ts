function getChai(chai:string | number){
    if (typeof chai === 'string'){
        return `Your chai: ${chai}`
    }
    return `your another chai ${chai}`
}

function getmsg(msg?:string){
    if (msg){
        return `your ${msg}`
    }
    return 'your default value'
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai...`
    }
    if (size === "medium" || size === "large"){
        return `make extra chai`
    }
    return `chai order ${size}`
}

class kulhadChai{
    serve(){
        return `Serving KulhadChai...`
    }
}

class CuttingChai{
    serve(){
        return `Serving CuttingChai...`
    }
}

function serve(chai: kulhadChai | CuttingChai) {
    if (chai instanceof kulhadChai){
        return chai.serve()
    }
}

type ChaiOrder = {
    type:string,
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === 'object' && 
        obj != null && typeof obj.type === 'string' 
        && typeof obj.sugar === 'number'
    )
}

function serverOreder(item:ChaiOrder|string){
    if (isChaiOrder(item)){
        return `Serving ${item.sugar} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai:${item}`
}

type MasalaChai = {type:"masala"; spicelevel:number};
type GingerChai = {type:"ginger"; amount:number};
type ElaichiChai = {type:"elaichi"; amount:number};

type chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order:chai){
    switch (order.type) {
        case 'masala':
            return `Masala Chai`
            break;
        case 'elaichi' :
            return `Elachi Chai`
            break
        case 'ginger' :
            return `Ginger Chai`
        default:
            break;
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ("amount" in order){
        //
    }
}

function isStringArray(arr:unknown):arr is string[]{
    //
}