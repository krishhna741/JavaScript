// for loops.......syntex

/*
for (initialization; condition; increment/decrement) {
  // code to execute each time
}
  */

// Example-counting (0 to 10)
for(let i = 0; i <= 10; i++){
    const element = i;
    // console.log(element);
}

for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is even number");
    }
    // console.log(element);
}

for (let i = 1; i <= 5; i++) {
//  console.log(`outer loop value : ${i}`);
 for (let j = 1; j <= 10; j++) {
//  console.log(`inner loop value ${j} and inner loop ${i} `);
//  console.log(i + "*" + j+ '=' + i*j);
 }
 
}

let myarray = ["superman", "batman", "spiderman"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element);
}

//break and continue
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        break;
    }
    // console.log(`value of i is ${i}`)
    
}
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`)
    
}