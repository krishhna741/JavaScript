//array...

const myArr=[0, 1, 2, 3, 4, 5]
// console.log(myArr)

const myHeros=["IronMan", "spiderMan"]
// console.log(myHeros)

const myArr2= new Array(1,2,3,4)
// console.log(myArr2[3]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice, splice

console.log("A ",myArr );
const myNew1 = myArr.slice(1, 3)
console.log("B ",myArr );
console.log(myNew1);

console.log("C ",myArr );
const myNew2 = myArr.splice(1, 3)
console.log("D ",myArr );
console.log(myNew2);

