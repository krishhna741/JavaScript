const user ={
    username: "krishh",
    password: '123',
    loginCount: 5,
    signedIN: true,

    getUserDetails: function(){
        console.log("Got user details from data base");
    }
}

console.log(user.username);
console.log(user.getUserDetails());
