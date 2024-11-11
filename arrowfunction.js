//es6 javascript inclusion in 2015
//this -> points to current context, this is a global object which can only be used inside an object and not in any type of functions.

const user = {
    username: "Devansh",
    price: 456,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}, Welcome`); //this points to current context which is the user object.
        console.log(this) //prints current context        
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage() //it takes the changed value of username as we used this keyword to access the value

//empty current context -> for node env, in browser this line gives window as an output.
// the current context depends on if we are running the code in node env or browser console
console.log(this) 


//this inside functions

//case 1 -> dire3ct declaration
function chai(){
    let username = "Dewvansh"
    console.log(this.username) //prints undefined as this only works for object context.
}

chai()


//case 2 -> variable declaration
const chai2 = function chai(){
    let username = "Dewvansh"
    console.log(this.username) //prints undefined as this only works for object context.
}

chai2()



//arrow function
const chaiArrow = () => {
    let username = "Dewvansh"
    console.log(this.username) //prints undefined as this only works for object context.
}

chaiArrow()


//Arrow function in a bit depth

// for using return keyword we need {} or say if we are using {} retrun keyword will be used
const addTwo = (num1, num2) => {
    return num1+num2
}

const addTwoII = (num1, num2) => ( num1 + num2 ) //if we use (), no return keyword needed


//to return an object, () has to be used.
const objFunction = () => (
    {username: "Devansh"}
)


