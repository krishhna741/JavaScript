// singleton-constructor....
// object.create

//object literals

const mySymbol = Symbol("Key1")
const JsUser = {
    name: "Krishh",
    "full name": "krishh Thakur",
    [mySymbol]:"myKey1",
    age : 20,
    location : "faridabad",
    email: "krishhcse@edu.in",
    isloggedIn : false,
    LastLoginDays: ["Monday", "saturday"]
} 
 
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

console.log(JsUser);

//function..
JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

