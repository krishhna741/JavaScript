const accountId = 14453
let accountEmail = "krishna@google.com"
var accountPassword = "12345" 
accountCity = "Jaipur"
let accountState; // undefined

// accountId = 52421  ...not allowed.
// var- Don't use becouse scope varibles are not used properly 

accountEmail = "krishh@google.com"
accountPassword = "54321"
accountCity = "Harayana"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
