var c = 300

let a = 300


if(true){
    let a = 10
    const b = 20
    var c = 30 //var doesn't resolve and identify the block scope.
    console.log("Block Scope a", a)

    //scope of all three variables are only in this if block
}

console.log("Outer/ Global scope a", a) //wont print as its out of scope -> let has good scope resolution
// console.log(b) //wont print as its out of scope -> let has good scope resolution
console.log("No scope resol in c", c) //prints c even it is not present in this scope hence it is avoided to use, as it does not resolve block scope

//NOTE -> EVERYTHING IN GLOBAL SCOPE CAN BE ACCESSED INSIDE BLOCK SCOPE, BUT ANYTHING INSIDE BLOCKSCOPE SHOULD NOT LEAK OUTSIDE IN THE GLOBAL SCOPE

//comment block scope c and run to understand the difference, basically block scope c overwrites the global scope c