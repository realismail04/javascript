// Day 4: Loops
// Tasks/Activities:

// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    // console.log(i);    
}
let y=1;
while (y <= 10) {
  // console.log(y);
  y++;  
}


let x=1;
do {
x++;
// console.log(x);
} while  (x <= 10)

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let t = 1; t <= 10; t++) {
result=t * 5;
// console.log(`5 X ${t} = ${result}`);  
}

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum=0;
let i=1;
while (i<=10) {
let result =+ sum;
i++;
}
// console.log(result);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let ys=10;
while (ys >= 1) {
  // console.log(ys);
  ys--;  
}


// Activity 3: Do... While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let xs=0;
do {
xs++;
// console.log(xs);
} while  (xs <= 4)

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let factorial=20;
let num=1;
// let result=1;
var resultsss=1;
do {
resultsss= resultsss * num;
// console.log(`number value ${num} factorial value ${factorial} the result ${resultsss}`);
num++;
} 
while  (num <= factorial)

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:

for (let a = 1; a <= 5 ; a++) {
  let star = '';
  for (let b = 1 ;  b <= a; b++) {
     star += '*';

    // console.log(star.repeat(a));
    // console.log(`A value ${a}`);
    // console.log(`B Vaalue ${b}`)
  } 
  
  console.log(star); 
}

// Number of rows
// let rows = 0;

// // Outer loop for each row
// for (let i = 5; i >= rows; i++) {
//     let pattern = '';
    
//     // Inner loop for printing asterisks
//     for (let j = 0; j < i; j++) {
//         pattern += '*';
//     }
    
//     // Print the pattern for the current row
//     console.log(pattern);
// }

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let num = 0; num < 10; num++) {

  if(num===5)
      ;
  
  // console.log(num);

}


// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.


for (let bc = 0; bc < 10; bc++) {

  if(bc===7)
      break;
  
  console.log(bc);

}
