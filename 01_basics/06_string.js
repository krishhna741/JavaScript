const name = "Krishna"
const weight = 65;

// console.log(name + weight);
console.log(`Hello my name is ${name} and my Body weight is ${weight}`);


const gameName = new String('krishh')
console.log(gameName [0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4))
console.log(gameName.indexOf('h'))

const newstring=gameName.substring(0,4)
console.log(newstring);

const anotherstring= gameName.slice(-5, 3)
console.log(anotherstring);

const newStringOne = "   Krishh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com/google%20google"
console.log(url.replace('%20', '-'))


console.log(String.fromCharCode(189, 43, 190, 61));


const filepath = String.raw`D:\5th sem cse\ML`;
console.log(`the file was uploaded from: ${filepath}`)


const sentance= "The quick brown fox jumps over the lazy dog."
const index = 4;
console.log(`character code ${sentance.charCodeAt(index)}is equal to ${sentance.charAt(index)}`)


const mood = "Happy!"
console.log(mood.repeat(3));
