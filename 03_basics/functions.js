function addtwonumbers(number1,number2){
    return   number1 + number2  
}
//console.log(addtwonumbers(2,3));
const result = addtwonumbers(100,3)
//console.log(result)
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));





//function2


const newarray=[1,2,333,4442]

function hey(getarr){
    return getarr[2]
}
console.log(hey(newarray));
console.log(returnSecondValue([200, 400, 500, 1000]));

