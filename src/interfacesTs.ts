function makeChaI(order:{type:string, sugar:number,strong:boolean}){
    console.log(order)
}

type TeaRecipe = {
    water:number,
    milk:number,
    varitent:'normal' | 'strong'
}

class MasalaChai implements TeaRecipe{
    water=100;
    milk=50;
    varitent:'normal' | 'strong' = 'normal';
}

interface CupSize {
    size: 'small' | 'medium' | 'large';
}

class chai implements CupSize{
    size: "small" | "medium" | "large" = 'large'
}

// type response = {ok:true} | {ok:false};

// class myRes implements response{
//     ok: true = true;
// } 

type TeaType = 'masala' | 'ginger' | 'lemon';

function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {
    teaLeaves: number
}
type Extra = {
    masala:number
}
type MasalaChai2 = BaseChai & Extra;

const mychai:MasalaChai2 = {
    teaLeaves:10,
    masala:5
}

type user ={
    username:string,
    bio?:string
}
const user1:user = {
    username:'chai lover'
}

const user2:user = {
    username:'tea lover',
    bio:'I love tea'
}