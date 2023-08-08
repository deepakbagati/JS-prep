const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","bat"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)// through concat and push we get same o/p it will take second array as one element
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]// through ... statement we can join two arrays.

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//if there is situation like array ke ander array,ander array .so to get o/p as only one single array we use flat
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//it will convert hitesh to  an array
console.log(Array.from({name: "hitesh"})) // interesting ,it will give empty object....

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//it will join all scores and produce ana single array.