//some loops are specifically added to properties (prototype field) of arrays for their significance and ease of use effect

const companies = ["Catlog", "TCS", "Poshmark", "Honeywell", "HSBC"]

//using foreach => it takes a call back fxn which specifies the logic to be performed for the array
//callback function doesn't have any name, it can be an arrow fxn, or normal function

//item has each element of the array thru out the iteration
companies.forEach( function (item)  {
    console.log(`The company is is ${item}`)
} )



//using arrow function
companies.forEach((item) => {
    console.log(`The company is is ${item}`)
})


//NOTE -> we can pass a function (normal,arrow both) (predefined in the forEach argument as well but we just need to pass the reference and not execute it)

function printMe(item){
    console.log(`Print me normal The company is ${item}`)
}

//

const printMeArrow = (item) => {
    console.log(`Print me arrow -> The company is ${item}`)
}

//apply print me function on each item of companies array, also we just passed the reference of function
companies.forEach(printMe)

//forEach has acces to multiple paramters

//item -> each element
//index -> index of that element
//arr -> whole array
companies.forEach( (item, index, arr) => {
    console.log(item, index, arr)
} )


//for each on array of objects

const myCompanies = [
    {
        name: "Catalog",
        location: "Hyd"
    },
    {
        name: "Honeywell",
        location: "Blr"
    },
    {
        name:"Amazon",
        location: "Gur"
    }
]

//obj has the access to each object thru out the iteration, we can destructure the key and value further in the logic/body of the function

myCompanies.forEach( (obj) => {
    console.log(obj.location)
} )