//from problem 1 till 5 -> we discussed different typeof values being converted to number.

// CONVERSIONS 


// let score =  33
// let score = "33"

// console.log(typeof score)   

// // converting score containig string to number

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) 


// // problem1
// // a non number string cant be typecasted to number hence it is NaN
// let score2 = "33abc"

// let ValueInNumberr = Number(score2)
// console.log(ValueInNumberr) //Nan


// // problem2
// // a null has a datatype of object and hence upon converting it to a number, it assigns it 0 => as 0 corresponds to null
// let score3 = null
// console.log(typeof score3) //object

// let valueInNumberscore3 = Number(score3)
// console.log(valueInNumberscore3) //0


// // problem 3
// // in case of undefined also, the number gets assigned to NaN
// let score4 = undefined
// console.log(typeof score4) //undefined

// let valueInNumberscore4 = Number(score4)
// console.log(valueInNumberscore4) //Nan



// // problem 4
// //for boolean to number, true = 1, false = 0
// let score5 = true
// console.log(typeof score5) //boolean

// let valueInNumberscore5 = Number(score5)
// console.log(valueInNumberscore5) //corresponding 0 or 1 is printed


// // problem 5
// // again a non numbe rstring cant be typecasted, hence assigned NaN
// let score6 = "devansh"
// console.log(typeof score6) //string

// let valueInNumberscore6 = Number(score6)
// console.log(valueInNumberscore6)  //Nan -> because a string cant be typecasted to an integer/ number



//BOOLEAN conversions ;- 

// let isLoggedIn = 1 //c1
// let isLoggedIn = "" //c2
// let isLoggedIn = "hitest" //c3 
// let isLoggedIn = 0 //c4
 
// let booleanIsLoggedIn = Boolean(isLoggedIn) //true
// console.log(booleanIsLoggedIn) //c1 = true, c2 = false, c3 = true, c4 = false



//to string conversions

//problem 1

let num = 33
let stringNum = String(num)
console.log(stringNum) //33
console.log(typeof stringNum) //string







