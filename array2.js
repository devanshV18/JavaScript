const marvel = ["ironaman", "thor", "captain america"]
const dc = ["flash", "superman", "batman"]

//push

//pushes the dc (an array) to the marvel array, therefore it proves any data can be pushed inside an array as dc is itself an array of strings

// marvel.push(dc) 
// console.log(marvel)
// console.log(marvel[3])
// console.log(marvel[3][1])


//RUN SEPARATELY

//concat 

//concats two or more arraya nd returns a new array. -> merges arrays and not just pushes data 

// const all = marvel.concat(dc)
// console.log(all)


//RUN SEPARATELY

//spread 

// WORKS SAME AS CONCAT BUT IN A DIFFERENT WAY

//... -> TRIPLE DOTS PICKS EACH ELEMET FROM THE ARRAY AND ADDS IT TO A NEW ARRAY

const all_spread = [...marvel, ...dc] 
console.log(all_spread)


//flat

//it flattens the entire array with all nested sub arrays present inside in a single array and retruns a new array
// it takes an argument which is the depth that means how many levels of subarrays need to be resolved.

const another = [1,2,3,[4,5,6, [7,8,9]]] // a two level deep nested array
const another_flat = another.flat(2)
console.log(another_flat)


//Array function
//converting to an array 

console.log(Array.from("Devansh"))

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);  // Duplicate values are ignored

console.log(mySet);  // Output: Set { 1, 2, 3 }

//coverted the set into an array
console.log(Array.from(mySet))



// of
//Creating array of variables

let score1 = 45
let score2 = 62
let score3 = 66

console.log(Array.of(score1, score2, score3))



//VVVII

//creating an array of keys or values from the object


