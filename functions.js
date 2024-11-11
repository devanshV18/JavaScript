function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(2))

//handling non certain number of parameters

function calculateCartPrice2(...num){
    return num
}

console.log(calculateCartPrice2(200,400,500, 1000))


function calculateCartPrice3(val1, val2, ...num){
    return num
}

console.log(calculateCartPrice3(200,400,500,600)) //val1 - 200, val2 - 400 rest are spread inside num which is returned.


const user = {
    name: "Devansh",
    moneySpent: 567890
}

function handleObject(anyObject){
    console.log(`Name is ${anyObject.name} and money spent is ${anyObject.moneySpent}`)
}

handleObject(user)