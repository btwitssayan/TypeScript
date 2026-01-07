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
let chai;
serve(chai=new kulhadChai)