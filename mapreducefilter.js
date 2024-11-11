const companies = ["Catlog", "TCS", "Poshmark", "Honeywell", "HSBC"]

const values = companies.forEach( (item) => {
    console.log(item) //prints each element
    return item //Retruns undefined -> WHY?
})

//NOTE -> forEach loop doesn't return any thing. its only for operating on the value of array while sometimes we might want top directly each element (a string, an obj etc)

console.log(values) //prints undefined


const myNums = [1,2,3,4,5,6,7,8,9,10]

//filter -> it takes a call back and it returns value while forEach doesn't return any value, basic usage of filter is to filter out values from the original array inside a new Array based on some condition.
// Hence filter retruns a new array

//strores all num (all element from myNums array which is greater than 4)

//case 1 - no braces = automatic returns value as per condition
const newNums1 = myNums.filter( (num) => num > 4 ) 
console.log(newNums1)


//case2 - with braces = return keyword is necessary if we are using a braces as the braces are a new scope.
const newNums2 = myNums.filter( (num) => {
   return num > 4
} ) 
console.log(newNums2) 



//how to perform same thing using forEach
const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums)



//map -> picks each element aand processes it asper login, it also returns a new array.

//all conventioins applies same like no braces single line return, if braces then use return etc.

const numbers = [1,2,3,4,5,6,78,10]

//adding 10 to each element
const modifNums = numbers.map((num) => num+10)
// console.log(modifNums)


//using for each
const modifiedNums = []

numbers.forEach( (num) => {
    modifiedNums.push(num+10)
} )

console.log(modifiedNums)



//chaining
//first map multiplies 10 to each element and second map takes each element with already 10 multiplied and adds two to it. Further we filter out numbers divisible by 3 from it using filter
const numsbums = numbers
                .map( (num) => num * 10 )
                .map( (eachNum) => eachNum + 2 )
                .filter(  ( eachNumagain) => eachNumagain % 3 === 0)
console.log(numsbums)


//reduce -> an array is taken, an initalvalue is taken, reduce is applied to the array (accumulator, currentValue) these are two args ;- accumulator 

const array1 = [1,2,3]

const initialValue = 0

const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => {
        console.log(`acc ${accumulator} and currval: ${currentValue}`)
        return accumulator + currentValue
    }, initialValue
)

console.log(sumWithInitial)