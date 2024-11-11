const name = "Devansh"
const repoCOunt  = 18
console.log(name)
console.log(name.charAt(0))
console.log(name.toUpperCase())

//old way
// console.log(name + repoCOunt + " High Contribution")


//better way = string interpolation =  backticks usages
console.log(`Hello my name is ${name} with a repo count of ${repoCOunt}`)

//this method initialises the string as an object with index of char as key and value at that index as its value.
const gameName = new String('marshalop') //constructing using the inbuilt constructor.

console.log(gameName)
//we can use multiple prototype methods for the string no matter how wwe declare the string
console.log(gameName.charAt(0)) //prints m
console.log(gameName.toUpperCase())

// extracts a part of string from the given string includes lower limit index and excludes uppler limit index.
console.log(gameName.substring(0,5)) 

//substring and slicer are absolutely same where they extract a part of string starting from lower limit and excluding upper limit, the difference is that slice accepts negative indices too. which means to process the string inr everse order.
console.log(gameName.slice(-4,-2)) 


//replace -> replace the first arg with another
console.log(gameName.replace('m', 'D'))

//trim -> removes leading and trailing whitespaces.

//includes - > check if the string includes something or not.
console.log(gameName.includes('ing'))


//split -> splits the string into an array based on the presence of a specific character
const url = "https:localhost:5000/api/get-profile"
console.log(url)
console.log(url.split('-'))


// note -> the original string is unchanged no amtter how many functions you use as string is primitive and we get a copy of the string variable whenever we referenc eit.

