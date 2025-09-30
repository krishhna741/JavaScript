// Scopes--> { }
// var c= 30

let a = 300 //globle scope..

if (true) {
    let a = 10    //block scope..
    // console.log("Inner a: ",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


// nested scope-----and----closer++++++++++++++++++++++
function one(){
    const username = "krishh"
    function two(){
        const website = "Google"
        // console.log(username);
    }
    // console.log(website);--error
    two()
}
one() 

if(true){
    const username = "krishh"
    if(username === "krishh"){
        const website = " google"
        // console.log(username+website);
    }
    // console.log(website);--error

}
// console.log(username);--error

// +++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}

const addtwo = function(num){
    return num+2
}
addtwo(5)
