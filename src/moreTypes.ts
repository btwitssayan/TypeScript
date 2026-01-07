let response:any = "42"

let numericlength:number = (response as string).length //forcefully type assertion

type Book = {
    title:string,
}

let bookString:string = "{title:'The Alchemist'}"

let bookOb = JSON.parse(bookString) as Book

console.log(bookOb.title);

const inputElements = document.getElementById("username") as HTMLInputElement

let value:any;

value = "Sayan"
value = 42

console.log(value.length); //runtime error

let newValue:unknown;

newValue = "Sayan"
newValue = 42

// console.log(newValue); //no runtime error   
if (typeof newValue === 'string'){
    console.log(newValue.length);
}

try {
    
} catch (error:Error) {
    if (error instanceof Error){
        console.log(error.message);
    }
    console.log(`Error : ${error}`);
}

const data:unknown = "Hello, World!"
// const stringData:string = data // Type 'unknown' is not assignable to type 'string'.
const stringData:string = data as string;

type Role = "admin" | "user" | "guest" 

function redirectToDashboard(role:Role):void {
    if (role === "admin"){
        console.log("Redirecting to admin dashboard...");
        return;
    }
    if (role === "user"){
        console.log("Redirecting to user dashboard...");
        return;
    }
    role
}

function neverReturns():never {
    while (true){
        console.log("This function never returns...");
    }
}