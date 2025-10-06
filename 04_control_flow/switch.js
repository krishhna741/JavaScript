//switch case
/*
switch (expression) {
  case value1:
    // code if expression === value1
    break;

  case value2:
    // code if expression === value2
    break;

  default:
    // code if none of the cases match
}
*/

//Example 1: Day of the Week...

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}


// Example 2: Calculator.........

let a = 10, b = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator");
}
