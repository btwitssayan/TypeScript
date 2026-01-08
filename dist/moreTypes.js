let response = "42";
let numericlength = response.length; //forcefully type assertion
let bookString = "{title:'The Alchemist'}";
let bookOb = JSON.parse(bookString);
console.log(bookOb.title);
const inputElements = document.getElementById("username");
let value;
value = "Sayan";
value = 42;
console.log(value.length); //runtime error
let newValue;
newValue = "Sayan";
newValue = 42;
// console.log(newValue); //no runtime error   
if (typeof newValue === 'string') {
    console.log(newValue.length);
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log(`Error : ${error}`);
}
const data = "Hello, World!";
// const stringData:string = data // Type 'unknown' is not assignable to type 'string'.
const stringData = data;
function redirectToDashboard(role) {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard...");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard...");
        return;
    }
    role;
}
function neverReturns() {
    while (true) {
        console.log("This function never returns...");
    }
}
export {};
//# sourceMappingURL=moreTypes.js.map