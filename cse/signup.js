console.log("This is the fourth example.")

let variable = 10;

const constant = 10;

console.log("variable = ", variable);
console.log("constant = ", constant);

variable = 20;
console.log("variable = ", variable);

// constant = 20;
// console.log("constant = ", constant);

const character = "a";
const text = "This is a string.";
const floating = 120.32484;
const boolean = true; // false

// Conditional blocks (if-else and switch)
// if (condition) {
//     statements;
// } else if (condition) {
//     statements;
// } 
// else {
//     statements;
// }
let a = 5;
if (a > 10) {
    a = 2 * a;
} else if (a === '5') {
    console.log('A is = ', a);
} 
else {
    a = 3 * a;
}
console.log(a);

switch (a) {
    case 5: {
        console.log('First case.');
        break;
    }
    case 7: {
        console.log('Second case.');
        break;
    }
    case 10: {
        console.log('Third case.');
        break;
    } 
    default: {
        console.log('None.');
        break;
    }
}

// Loops
// for, while, do-while
// for (let i = start_value; i < end_value; i++) {
//      statements;
// }

// sum of all number from 0 to n, including n
// initialize how many elements to include (n)
// initialize a variable (sum) with 0
// algorithm / steps 
// - get number
// - add number to sum
// - increase number by 1
// - repeat this n+1 times.
let n = 10;
let sum = 0;
for (let i = 0; i < n+1; i++) {
    sum = sum + i;
}
console.log(sum);

// product of all numbers from start_value to end_value, including end_value
// initialize how many elements to include (end_value)
// initialize a variable, product, with 1
// algorithm / steps
// - get number
// - multiply number to product 
// - increase number by 1 
// - repeat n+1 times
// Obs1: if start_value == 0 => no need for a loop, product = 0
// Obs2: if start_value < 0 and end_value is > 0 => no need for a loop, product = 0
// Obs3: if end_value < start_value => error 
const start_value = 1;
const end_value = 10;
let product = 1;
for (let i = start_value; i <= end_value; i++) {
    if (start_value === 0) {
        product = 0;
        break;
    }
    if (start_value < 0 && end_value > 0) {
        product = 0;
        break;
    }
    if (start_value > end_value) {
        throw("Start value is greater than end value.");
    }
    product = product * i;
}
console.log(product);






