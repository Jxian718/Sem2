//Arrow function syntax
const multiply = (a,b) => a * b

//Traditional function syntax
function traditionalMultiply(a,b){
    return a * b
}

//Display all items from an argument
const displayAll = (arr) => {
    for (const item of arr){
        console.log(item)
    }
}

const phones = ["iPhone","Samsung","Oppo"]
displayAll(phones)

const convertCMtoM = (cm) => {
    const m = cm / 100
    return m
}

const lengthOfCarInCm = 300
convertCMtoM(lengthOfCarInCm)

const lengthOfCarInm = convertCMtoM(lengthOfCarInCm)
console.log(lengthOfCarInm)

//Write an arrow function that converts kgs to lbs, then returns the result.
const convertKGToPounds = (kgs) => kgs * 2.20

const dTrump = 108
const dTrumpInPounds = convertKGToPounds(dTrump)
console.log(dTrumpInPounds)