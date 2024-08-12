// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

const number = 10; // You can change this value to test different numbers

if (number > 0) {
  console.log(`${number} is positive.`);
} else if (number < 0) {
  console.log(`${number} is negative.`);
} else {
  console.log(`${number} is zero.`);
}


// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let eligible_age=10;

if(eligible_age >=18){
  console.log("your are eligible to vote");
}else{
console.log("your are not eligible");
}




// Activity 2: Nested if-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function findLargest(a, b, c) {
  let largest;

  if (a >= b) {
      if (a >= c) {
          largest = a;
      } else {
          largest = c;
      }
  } else {
      if (b >= c) {
          largest = b;
      } else {
          largest = c;
      }
  }

  return largest;
}

// Example usage:
let num1 = 10;
let num2 = 20;
let num3 = 15;

console.log("The largest number is: " + findLargest(num1, num2, num3));

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day;
switch (new Date().getDay()) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case  7:
    day = "Sunday";
  default:
    break;
}
console.log(day);

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', C', 'D', 'F') based on a score and log the grade to the console.

let score=40;
switch (score) {
  case score>=90:
    console.log("A Grade")
    break;

    
  case score>=80:
    console.log("B Grade")
    break;
    
  case score>=70:
    console.log("C Grade")
    break;
    
  case score>=60:
    console.log("D Grade")
    break;
    
  case score>=50:
    console.log("F Grade")
    break;
  default:
    console.log("Failed Grade")
    break;
}


// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let even_old = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

even_old.forEach(num => {
    let result = (num % 2 === 0) ? "Even" : "Odd";
    console.log(`Number ${num} is ${result}`);
});

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// javascript implementation to check 
// if the year is a leap year 
// using macros

  // Macro to check if a year 
  // is a leap year
  
  function ISLP(y)
  {
    if((y % 400 == 0) ||
       (y % 100 != 0) && 
       (y % 4 == 0))
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }

  var year = 2021;
  console.log(ISLP(year));

  // document.write(ISLP(year));
  
// This code is contributed by Amit Katiyar 


// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// program that checks if the number is positive, negative or zero

// const Neg_number = parseInt(prompt("Enter a number: "));
const Neg_number = 10;

// check if number is greater than 0
if (Neg_number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (Neg_number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}

// Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
const age_valid = 18;

// check if number is greater than 0
if (age_valid >= 18) {
    console.log("you are eligible to vote ");
}

// check if number is 0
else if (age_valid < 18) {
  console.log("you are Not eligible to vote ");
}
// if number is less than 0
else {
     console.log("error");
}



// Achievement:
// By the end of these activities, students will:

// Implement and understand basic if-else control flow. Use nested if-else statements to handle multiple

// conditions. Utilize switch cases for control flow based on specific values.

// Apply the ternary operator for concise condition checking.