let myDate = new Date()
console.log(typeof myDate) //object
console.log("one", myDate) //not really readable

console.log("two",myDate.toString()) // Day Mon Date yyyy hh:mm:ss GMT+<value> (Indian Standard Time)
console.log("three",myDate.toDateString()) // extracts Date from new Date() and prints it in string
console.log("four",myDate.toISOString())
console.log("five",myDate.toJSON())
console.log("six",myDate.toLocaleDateString()) //returns date as mm/dd/yyyy as a string
console.log("seven",myDate.toLocaleString()) //returns mm/dd/yyyy, hh:min:sec
console.log("eight",typeof myDate.toLocaleString()) //string, not an object


//declaring a specific Date

let myCreatedDate = new Date(2023, 0, 23) //yyyy, month -> starts from 0, date
console.log(typeof myCreatedDate) //object type
console.log("nine",myCreatedDate)
console.log("tenth",myCreatedDate.toDateString())


//declaring a specific date and time
let myCreatedDateandTime = new Date(2024, 10, 10, 12, 48) //yyyy, month, date, hour, min
console.log("eleventh",myCreatedDateandTime)
console.log("twelfth",myCreatedDateandTime.toLocaleString())


//current time
let myTImeStamp = Date.now()
//returns your current date and time in milliseconds starting from jan 1 1970, we need to extract value from it
console.log("thirteen",myTImeStamp) 

//date functions

let newDate = new Date() // for 10th Nov 2024
console.log("fourteen",newDate) 
console.log("fifteen",newDate.getMonth() + 1) //10 -> 0 based index so 10th index denotes 11 th month
console.log("sixteen",newDate.getDay()) // sunday, -> 0 as again it starts with 0 based index.


//vvimp -> format customisation for toLocaleString 
console.log("seventeen",newDate.toLocaleString('default', {
    weekday: "long",
})) //arguments take an object defining multiple parameters.