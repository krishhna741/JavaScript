//promises in JS............
// -pending, fulfilled, rejected.



//promise create
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task -
    //DB calls, cryptography, network calls;
    setTimeout(function(){
        console.log('async task is complete');
        resolve();      //direct connect then()
    },1000)
})

//prmise consumption
promiseOne.then(function(){
    console.log('promise consumed');
})       

//another approch....
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async tsk 2');
        resolve();
    }, 1000)
}).then(function(){
    console.log('async 2 resolved');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "krishh", email: "krishh@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
           resolve({username:'deepak', password:'123'}) 
        }else{
            reject('ERROR: Something went Wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either reasolved or rejected");
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: 'javascript', password: '123'})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()


//try-async function getAllUsers()-using then,catch ()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})