//contructor approach -> singleton object (no other diff)
const tinderUser1 = new Object()

const tinderUser2 = {}

tinderUser2.id = "123abc"
tinderUser2.name = "John"
tinderUser2.isLoggedIn = false


//nested objects
const regularUser = {
    email: "any@gmail.com",
    fullName: {
        userfullName: {
            firstName: "Devansh",
            lastName: "Verma"
        }
    }
}

//can use optional chaining used in handling nested objects coming from API response.
console.log(regularUser.fullName.userfullName.firstName)



//combining objects
const obj1 = {
    1: "A",
    2: "B"
}

const obj2 = {
    3: "C",
    4: "D"
}

//both obj1 and obj2 inside an obj3 variable. NOT COMBINING
// const obj3 = { obj1, obj2 } //both obj1 and obj2 inside an obj3 variable. // not combinig

//lets combine M1
// const obj3 = Object.assign( {}, obj1, obj2 ) //combines obj1 and obj2 inside a single object

//lets combine M2
const obj3 = {...obj1, ...obj2}


console.log(obj3)


// /accessing an array of obj
const users = [
    {
        id:1,
        email:"d@d.com"
    },

    {
        id:2,
        email:"p@p.com"
    },
]

console.log(users[0].id)
console.log(users[1].email)


console.log(tinderUser2)


//object.keys -> returns array of keys
const keystinderuser2 = Object.keys(tinderUser2) 
console.log(keystinderuser2) 

//Object.values -> returns array of values
const valuesTinderUser2 = Object.values(tinderUser2)
console.log(valuesTinderUser2)

//Object.entries -> array of each key value pair -> an array that contains array of key and value at each index.
const tinderUser2Entries = Object.entries(tinderUser2)
console.log(tinderUser2Entries)

//hasOwnProperty -> asks object if the sent property is present or not
console.log(tinderUser2.hasOwnProperty('matches')) //returns false 


