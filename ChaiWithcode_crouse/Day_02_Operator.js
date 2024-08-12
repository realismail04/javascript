// Tasks/Activities:
// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
// Task 2: Write a program to subtract two numbers and log the result to the console. 
// Task 3: Write a program to multiply two numbers and log the result to the console.
// Task 4: Write a program to divide two numbers and log the result to the console.
// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

// Task 1: Write a program to add two numbers and log the result to the console.

let num1=10;
let num2=20;
console.log(num1+num2);

// Task 2: Write a program to subtract two numbers and log the result to the console. 
let num3=10;
let num4=20;
console.log(num4-num3);

// Task 3: Write a program to multiply two numbers and log the result to the console.

let num5=10;
let num6=20;
console.log(num5*num6);

// Task 4: Write a program to divide two numbers and log the result to the console.

let num7=10;
let num8=20;
console.log(num7/num8);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let num9=10;
let num10=20;
console.log(num7%num8);


// Activity 2: Assignment Operators
// Task 6: Use the operator to add a number to a variable and log the result to the console.

let score = 50; // Initial value
const pointsToAdd = 20;
score += pointsToAdd; // Add pointsToAdd to score

console.log(`The new score is ${score}.`);


// Task 7: Use the operator to subtract a number from a variable and log the result to the console.

let balance = 100; // Initial value
const amountToSubtract = 30;

balance -= amountToSubtract; // Subtract amountToSubtract from balance

console.log(`The new balance is ${balance}.`);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let campareOne=20;
let campareTwo=10;
console.log(campareOne>campareTwo);
console.log(campareOne<campareTwo);

// Task 9: Write a program to compare two numbers using >= and <=and log the result to the console.

console.log(campareOne>=campareTwo);
console.log(campareOne<=campareTwo);

// Task 10: Write a program to compare two numbers using and == and === log the result to the console.

console.log(campareOne==campareTwo);
console.log(campareOne===campareTwo);


// Activity 4: Logical Operators

let OperatorOne=20;
let Operatortwo=30;

// Task 11: White a program that uses the && operator to combine two conditions and log the result to the console.
if(OperatorOne == 30 && Operatortwo == 30){
    console.log("condition is true");
}
else{
    console.log("error");
}
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if(OperatorOne == 30 || Operatortwo == 30){
    console.log("condition is true");
}
else{
    console.log("error");
}

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

const isRaining = false;

const isNotRaining = !isRaining;

console.log(`Is it not raining? ${isNotRaining}`);


// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console

let val=60;
let MaxVal= val > 70 ? "greater then" : "increse more ";
console.log(MaxVal);