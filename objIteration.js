const myObj = {
    js: "Javascript",
    cpp: "c++",
    rp: "ruby",
    swift: "Swift fot ios"
}

//iterating objects -> for in loops (works for others as well)

//below the single keyword (key/can be anything) accesses the keys
//returns all key
for(const key in myObj){
    console.log(key)
}


//getting values for the obj for each key using the keyword key used to access each key of the object
for(const key in myObj){
    console.log(`Key is ${key} and value is ${myObj[key]}`)
}

// VVVIII
//for in on arrays
const prog = ["js", "python", "java", "ruby", "swift"]

//returns or prints index in i
for(const i in prog){
    console.log(i)
}

//printing element using in
for(const i in prog){
    console.log(`Value at Index ${i} is ${prog[i]}`)
}


const map = new Map() //declaration of map, wwe can access functions of map using map.
map.set('IN', "India")
map.set('USA', "United States")
map.set('FR', "France")
map.set("IN", "Bharat") //changes value for the key IN but doesn't add another entry as "IN" => "Bharat"

console.log(map) //prints comma sepated key value pair of map inside curly braces 
//output : - { 'IN' => 'Bharat', 'USA' => 'United States', 'FR' => 'France' }


//using for in loop on map
//map is non iteratable using for in
for( const key in map ){
    console.log("Map Printing", key) //prints
}

