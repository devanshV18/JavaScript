const myArr = [0,1,2,3]

console.log(myArr)

//push
myArr.push(5)
myArr.push(8)
console.log(myArr)


//pop
myArr.pop()
console.log(myArr)

//unshift -> adds an element to the start by shifting all the values in the array by one place 
myArr.unshift('c')
console.log(myArr)

//shift -> removes the firsst element
myArr.shift()
console.log(myArr)

//includes = to check if argument is present in the array or not
console.log(myArr.includes(6)) //fasle -> returns boolean

//indexof - returns index of the argument if present else -2
console.log(myArr.indexOf(1))


//join -> adds all the elements of an array to a string with commas and no space
const newArr = myArr.join() 

console.log(typeof newArr) //string
console.log(newArr)
console.log(myArr)


//slice -> returns a section of the array
console.log("Describing SLice")
console.log("A", myArr)
const myNewArr = myArr.slice(1,3) // includes lower limit and excludes upper limit, argument are indices
console.log("Slice ",myNewArr)
console.log("B", myArr)

//note -> original array remainns same in slice

//VVVII -> splice-> manipulates the original array by implementing the slice, removes the sliced part from the original array and uniquely called as splice operation
console.log("Describing Splice")
console.log("A" ,myArr)
const myNewArr2 = myArr.splice(1,3) //includes lower limit and excludes upper limit, argument are indices
console.log("Splice ", myNewArr2)
console.log("B", myArr)