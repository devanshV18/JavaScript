//for of loop -> iterate on each object, element of the array

const arr = [1,2,3,4,5]

//iteration on elements of arr
for(const val of arr){
    console.log(val)    //prints each value of arr through the iteration
}

const str = "Hello World!"

for(const greet of str){
    console.log(`Each char is ${greet}`)
}


//Map
//holds "unique" key value pair, repeated key wont be passed

const map = new Map() //declaration of map, wwe can access functions of map using map.
map.set('IN', "India")
map.set('USA', "United States")
map.set('FR', "France")
map.set("IN", "Bharat") //changes value for the key IN but doesn't add another entry as "IN" => "Bharat"

console.log(map)


//loop thru map
//each key value pair is inserted in an array and printed
//in this case we get three array each array has 2 elements, a key and a value

for(const key of map){
    console.log(key)
}

//destructing key and value and in map while iterating/looping
for(const [key,value] of map){
    console.log(key, '=', value)
}


//for of on object
// objects aren't iteratable using for of directly.