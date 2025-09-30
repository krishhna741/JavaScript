// this --> current context 

const user ={
    username:"krishh",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this);
        
    }
}

// user.welcomeMassage()
// user.username = "sam"
// user.welcomeMassage()
// console.log(this) ----> {}empty

// function one(){
//     let username = "krishh"
//     // console.log(this.username);--->undefined.
// }
// one()

// const one = function () {
//     let username = "krishh"
//     // console.log(this.username);--->undefined
// }
// one()

//arrow function--->  () => {}
const one = () => {
    let username = "krishh"
    // console.log(this.username);--->undefined
}
// one()


// first way 
// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3, 4))

// second way
// const addtwo = (num1,num2) => num1 + num2
// console.log(addtwo(3, 4))

//third way
const addtwo = (num1,num2) => (num1 + num2)
console.log(addtwo(3, 4));
