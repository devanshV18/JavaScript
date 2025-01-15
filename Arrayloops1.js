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

//VVII
//loop thru map
//each key value pair is inserted in an array and printed
//in this case we get three array each array has 2 elements, a key and a value

//single keyword (here check) access every key value pair and we can print it, by default an array of every key and value is printed
for(const check of map){
    console.log(check)
}

//customised destructured printing, by accessing two values
//destructing key and value in map while iterating/looping we can use any keyword although, not really key value is required to use
for(const [check,mic] of map){
    console.log(check, '=', mic)
}


//for of on object
// objects aren't iteratable using for of directly.