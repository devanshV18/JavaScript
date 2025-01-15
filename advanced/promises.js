const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    resolve()
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



//note -> these are custom promises, if they will be resolved or rejected can be controlled b y us to explore different scenarios

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS galat wrong')
        }
    }, 1000)
});

console.log("Five", promiseFive)

async function consumePromiseFive(){
    try {
        const response = await promiseFive //this line processes the promiseFive value, as per the logic above, it either gets resolved or rejected.
        //we know if await promiseFive gets reject(..) upon execution it directly transfers the control to the catch block as reject and catch are linked, On the other hand if reponse gets a resolve from the promiseFive upon execution of await then the try catch code proceedes.
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//VVVII

//SCENARIO1 - IF ERROR IS SET AS FALSE IN promiseFive
// IN THIS CASE, IN THE ASYNC FUNCTION THE LINE await promiseFive gets a resolve({...}) upon execution whcih gets stored in response, hence the response variable receives a resolve() and thus try cvatch execution completes.

//SCENARIO2 - IF ERROR IS SET AS TRUE IN promiseFive
//IN THIS CASE, IN THE ASYNC FUNCTION THE LINE await promiseFive gets a reject(...) upon execution whcih gets stored in response, hence the response variable receives a reject() and thus the controlled is handled over the catch block immediately and catch block executes.

//hence if the promise is returning resolve() -> try
// if the promise is returning reject() - catch


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro. 