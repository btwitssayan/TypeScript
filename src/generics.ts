function warpInArray<T>(item: T): T[] {
    return [item];
}

warpInArray("Chai");
warpInArray(10);
warpInArray({flavor:"Masala", price:10});

function pair<A,B>(first:A, second:B):[A,B]{
    return [first, second];
}

pair("masala", 10);
pair(true, {flavor:"Ginger", price:15});

interface Box<T>{
    contents: T;
}

const numberBox: Box<number> = {
    contents: 42
}

const stringBox: Box<string> = {
    contents: "Hello, Generics!"
}

interface ApiPromise<T>{
    status: number;
    data: T;
}

const res: ApiPromise<{flavor:string; price:number}> = {
    status: 200,
    data: {
        flavor: "Masala",
        price: 10
    }
}