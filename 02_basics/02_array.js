const marvel_heros = ['IronMan', 'SpiderMan', 'Thor']
const dc_heros = ['SuperMan', 'BatMan', 'Flash']

// old method 

// marvel_heros.push(dc_heros)         
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][2]);


// new method

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
// console.log(all_heros[5]);

// latest method----spread method

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// console.log(all_new_heros[5]);

// new concept 
const new_arr = [1,2,3,4,[5,6],[7,[8,9,0]]]
// const another_new_arr = new_arr.flat(Infinity)
// console.log(another_new_arr);

// console.log(Array.isArray('Krishh'))
// console.log(Array.from('Krishh'))

let score1=100
let score2=200
let score3=500

console.log(Array.of(score1, score2, score3));


