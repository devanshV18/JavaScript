//nested scopes
//closures -> DOM manipulation using JS

//NOTE -> bahar wale scope s andar wale scope me data/function ka acess allowed hai, lekin bahar wale scope me andar wale scope ka data/function ka acess allowed nahi hai.

function one(){
    const username = "Devansh"
        function two(){
            const website = "vercel"
            console.log(username) // for function two, function one is a part of global scope so it can access username
        }

        // console.log(website) // throws an error as website is in an inner scope which ends in function twop itself.
        two()
    }

    //same scope login goes in if else and othr stuff

    //Driver code
one()


// vvviii
console.log(addOne(5)) //addOne function can be accessed here also as it it a function declaration not held in a variable

function addOne(num){
    return num + 1;
}


console.log(addTwo(6)) //we can't access this function before declaration as it is declared in a variable.

const addTwo = function(num){
    return num+2
}

