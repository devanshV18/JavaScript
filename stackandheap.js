//primitives -> string, Number, boolean, null, undefined, symbol, bigint
//STACK = all primitive variablesa are created in stack and we get a copy of each created variable.

let gamingName = "marshal" 

let anotherName = gamingName
anotherName = "csgosmurf"

console.log(gamingName);
console.log(anotherName)



//non primitives -> array, object, functions
//HEAP = all non primitives go to heap where the reference of each variable is returned.

let userOne = {
    email: "user@google.com",
    upi: "8252@ybl"
}


let userTwo = userOne


//userOne and userTwo point to the same document/ object inside the heap memory

//both line prints the same object, as userTwo has a reference to userOne
console.log(userOne)
console.log(userTwo)