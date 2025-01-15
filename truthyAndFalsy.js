const userName = ""

if(userName){
    console.log("UserName exists")
}else{
    console.log("No username exists")
}


//when will username be considered a truthy value and a falsy value?

//falsy -> false, 0 , -0, null, BigInt n, "", null, defined, NaN
//other than this, every value is considered to be truthy.
// example , truthy -> "0", 'false', " ", [] (empty array, resolved by checking length), {} (empty obj), function(){} -> empty fxn with no parameter and exec code


//checking empty object
const emptyObj = {}

//By checking length of the keys of the argument object as Object.keys(emptyObj) creates an array of keys of the obj, if its length is zero -> it means it is an empty obj 
if(Object.keys(emptyObj).length === 0){
    console.log("Empty Object")
}


//Null is Calescing Operator (??) : null undefined
//safety check for null and undefined -> works like ||
let val1
val1 = 5 ?? 10 
//the above line places 5 in val1 
console.log(val1) //prints 5

//the below line places 10 in val1
val1 = null ?? 10

console.log(val1)//prints 10