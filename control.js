const trueStatement = false

if(trueStatement){
    console.log("This statement is true")
}else{
    console.log("This statement is false")
}

//Using Comparison Operators
const marks = 70
const failGrade = 59

if(marks > failGrade){
    console.log("You Failed")
}else{
    console.log("You passed!")
}

//Write me the if else , but the code blocks for if and else have to be flipped
if(/*What do you put inside here?*/ ){
    console.log("You passed!")
}else{
    console.log("You Failed")
}

const standardPay = 8
const minimumHours = 40
const otHours = 20

// Calculate for me the amount of OT pay, if you have OT for more than
// 15 hours, the rate is 2x the standard rate, otherwise you get 1.5x
// the standard rate

let OTRate = 1.5

if(otHours > 15){
    OTRate = 2
}

console.log("Your OT pay is " + OTRate * standardPay * otHours)

# Exercise 1: The Passing Grade (if / else)

//# Scenario: A teacher needs to automatically determine if a student has passed or failed a quiz based on their score.
//- Task: Write a script that checks a variable called score.
//- Rules:
//  - If the score is 50 or higher, print "Pass".
//  - If the score is less than 50, print "Fail".
//- Bonus Challenge: Add an extra condition. If the score is exactly 100, print "Perfect Score!" instead of just "Pass".

let score = 100;

if (score === 100) {
    console.log("Perfect Score!");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}