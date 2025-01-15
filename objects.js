//object literal approach -> non singleton

//literal

//keys are string in itself in js

const user1 = {
    name: "Devansh",
    email: "devansh024@gmail.com",
    age: 21,
    location: "chennai",
    isLoggedIn: false,
    gymDay: ["Monday", "Tuesday"]
}

console.log(user1.email) //m1 to access
console.log(user1["email"]) //m2 to access

const user2 = {
    "name": "Harsh",
    email: "devansh024@gmail.com",
    age: 21,
    location: "chennai",
    isLoggedIn: false,
    gymDay: ["Monday", "Tuesday"]
}

//in user 2, name can not be accessed using . as it is wrapped in "", we only can use [] notations
console.log(user2["name"])


//using symbol as a key
const mySym = Symbol("keyn")

const user3 = {
    "name": "Pranav",
    email: "devansh024@gmail.com",
    age: 21,
    location: "chennai",
    isLoggedIn: false,
    gymDay: ["Monday", "Tuesday"],
    [mySym]: "key1"
}

//syntax is to wrap the declared symbol (mysum) in square brackets to use a Symbol as a key
// to access it we again have only one choice -> use square brackets

console.log(user3[mySym])
console.log(user3)

//changing values
user1.email = "devansh@chatgpt.com"
console.log(user1)


//to freeze changes to any object
Object.freeze(user1) // now we can't override values in user1 object
user1.email = "devansh@fb.com"
console.log(user1) //user1.email -> remains devansh@chatgpt.com




//appending a function with our object user2 (!!! The object should not be freezed !!!)
user2.greetings = function(){
    console.log("Hello User")
}

user2.greetings2 = function(){
    console.log(`Hello user, ${this.name}`) //this refers to current object
}

// console.log("One",user2.greetings) //returns function recognition -> only a message is returned acknowledging this is a functo=ion but the function is not executed
console.log("Two",user2.greetings()) 

console.log("Three",user2.greetings2())