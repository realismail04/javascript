// varibale declaration


// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num=1231;
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let strg="hello Wowld";
console.log(strg);


// Activity 2: Constant Declaration

    // Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const check=false;
console.log(check);

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
var num1=10;

var strg2="welcome";

var check2=true;

var object={}; object.department="Production"; object.people=12; object.post="Developer"; object.Working_hours=8;

var array=[1,2,3,4];

console.log(num1,strg2,check);
console.log(object)
console.log(object.Working_hours,object.department,object.people,object.post);
console.log(array);

console.log(typeof num1, typeof strg2, typeof check, typeof object, typeof array);
// console.log(object)
// console.log(typeof object.Working_hours, typeof object.department, typeof object.people, typeof object.post);
// console.log(array);

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let value=10;
console.log(value);
value=20;
console.log(value)

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.

const resgin=313;
console.log(resgin);
resgin=232;
console.log(resgin);

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console. 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment

// Achievement:
// By the end of these activities, you will:
// Know how to declare variables using var, let, and const..
// Understand the different data types in JavaScript.
// Be able to use the typeof operator to identify the data type of a variable.
// Understand the concept of variable reassignment and the immutability of const variables.