// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function check(num){
    if(num % 2 === 0 ){
console.log("even")
    }
    else{
        console.log("odd")
    }
} 
check(20);

// Task 2: Write a function to calculate the square of a number and return the result.

// Task 2: Write a function to calculate the square of a number and return the result.

function square(num) {
    let result = num * num;
    return result;
} 

let result = square(20);
console.log(result);

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const max = function(num1, num2) {
    if (num1 > num2) {
        console.log("The value of number one is greater");
    } else if (num2 > num1) {
        console.log("The value of number two is greater");
    } else {
        console.log("Both numbers are equal");
    }
};

max(10, 20);



// • Task 4: Write a function expression to concatenate two strings and return the result.

const concatenate = function(val, val2) {
    let results = val.concat(val2);
    return results;
};

let concatenatedResult = concatenate("check One", "check Two");
// console.log(concatenatedResult);

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

sum = (sum1,sum2) => {
    result=sum1 + sum2;
return result;
}
// console.log( sum(20,20));


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// let str="value";
// const checks = (str,tofind)=>{
//     Findresult=str.includes(tofind);
// return Findresult;
// }
// console.log(checks(str,"r"));


const checks = (str,tofind)=>str.includes(tofind);
// console.log(checks("value","a"));



// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const product=(p1,p2=1)=>p1*p2;
// console.log(product(2,2));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const person=(name,age=12)=>`Name: ${name} age: ${age}`;
console.log(person("uzair"));


// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result. 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
// Achievement:
// By the end of these activities, students will:
// Understand and define functions using function declarations