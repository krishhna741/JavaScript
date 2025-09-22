//functions..
function sayMyName(){
    console.log("krishh");
    console.log("Ra.one");
    console.log("Kaal");
}
// sayMyName()   //execution.
// sayMyName --------  refrence!


// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNumber(3, 4)  //--7

// function addTwoNumber(num1, num2) {
//     let result = num1+num2
//     return result;
// }

// function addTwoNumber(num1, num2) {
//     return num1+num2;
// }
// const result = addTwoNumber(3, 5)
// console.log("result: ",result);

function loginUserMessage(username){
    // if (username === undefined) {
    //     console.log("please enter a username!");
    //     return;
    // }
    if (!username) {
        console.log("please enter a username!");
        return;
    }
    return `${username} just logged in!`
}
// console.log(loginUserMessage("krishh"))
// console.log(loginUserMessage())


// ...num1 = rest oprator
function calculatecartprice(...num1){
    return num1;
}
// console.log (calculatecartprice(200, 300, 400))

const user={
    username: "krishh",
    price: 100,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)

const myArray = [200, 300, 400, 100]
function returnvalue (getArray){
    return getArray[1]
}
console.log(returnvalue(myArray));

