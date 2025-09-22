//singltton...
// const tinderuser = new Object()
// console.log(tinderuser);

//object literals-non singlton
const tinderUser = {}

tinderUser.id= "123@abc"
tinderUser.name= "Bob"
tinderUser.isLoggedIn= false
// console.log(tinderUser);

const regularUser = {
    email: "kriishh@123gmail.com",
    fullname: {
        userfullname:{
            firstname: "krishh",
            lastname:"Thakur",
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3={...obj1,...obj2}  //letest
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JavaScript",
    price: "1000",
    courseInstructor: "Krishh"   
}
// course.courseInstructor

//destructuring...an object..
const {courseInstructor:Teacher} = course
console.log(Teacher);

// API:(Application Programming Interface) 
// API using Json formate as-obj
//      {
//          "name": "krishh",
//          "coursename": "JavaScript",
//          "price": "free"
//      }
// API using Json as -array 
//      [
//          {},
//          {},
//          {}
//      ]


