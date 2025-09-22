//  #primitive type...(call by value)
// 7-types:-String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123');

console.log(id === anotherID);

const bigNumber = 345465n;

//  #Non primitive type...(call by refrence)
// Array, Object, Functions

const heros = ["krishh", "spiderMan", "superMan"];
let myobject = {
    name:"krishna", age: 22,
}

const myfonction=function() {
    console.log("hello world")
}

console.log(typeof myfonction);

// ++++++++++++++++++++++++  Memory  ++++++++++++++++++++ //

// Stack(Primitive) ,  Heap(Non-Primitive)
// ex. for stack

let myname = "krishh";
let anothername = myname
console.log(anothername);
anothername = "krishna"
console.log(myname);
console.log(anothername);

//ex. for Heap

let userone = {
    email:"krishna@google.com"
}
let usertwo = userone

console.log(userone);
console.log(usertwo);

usertwo.email = "krishnarcs595@gmail.com"

console.log(userone);
console.log(usertwo);







