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


// while loop (when you want to loop until something is false)
// while (condition is true) {
//     statements
// }
// while (true) {
//     console.log("While loop.")
// }
n = 20;
sum = 0;
let i = 0;
while (i <= n) {
    sum = sum + i;
    i = i + 1;
}
console.log(sum);

// do...while 
// do {
//     statements;
// } while (condition is true);

let result = "";
i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);
console.log(result);

// Array 
const array1 = [];
array1.push(1);

const array2 = [];
for (let i = 1; i <= 10; i++) {
    array2.push(i);
}
console.log(array2);

const indexOf2 = array2.indexOf(2);
console.log("index of 2 = ", indexOf2);

console.log("number of elements = ", array2.length);

array2[0] = 10;
console.log(array2);

// check how many elements are even inside an array
// 1. initialize an array 
// 2. initialize a counter, countOfEven = 0
// 3. 
//  - go through this array element by element
//  - check if current element is even (divide by 2 and reminder is 0)
//  - if element is even increase counter by 1 
const arr = [1, 2, 3, 6, 6, 10];
let countOfEven = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        countOfEven = countOfEven + 1;
    }
}
console.log("number of even elements = ", countOfEven);

countOfEven = 0;
for (let element of arr) {
    if (element % 2 === 0) {
        countOfEven += 1;
    }
}
console.log("number of even elements = ", countOfEven);

const obj1 = {
    "name": "Web Apps 1",
    "year": "2023-2024"
};

console.log(obj1["name"]);
console.log(obj1.name);

const data = {
    "_id": "6540bdf66339efa474a049e3",
    "index": 0,
    "guid": "cb66e453-aafb-449a-b128-66b3c4b2e6bf",
    "isActive": true,
    "balance": "$3,278.15",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "green",
    "name": "Maxine Green",
    "gender": "female",
    "company": "LUNCHPAD",
    "email": "maxinegreen@lunchpad.com",
    "phone": "+1 (954) 524-3798",
    "address": "693 Manhattan Avenue, Bayview, Nebraska, 645",
    "about": "Pariatur excepteur non aliquip mollit consequat quis dolor deserunt id irure enim ex occaecat. Est amet ipsum voluptate esse cillum officia consectetur ex incididunt. Sit commodo sunt cillum eu id magna laborum reprehenderit eiusmod tempor commodo.\r\n",
    "registered": "2017-04-22T10:55:50 -03:00",
    "latitude": -75.384207,
    "longitude": -83.140368
}

console.log(data);
console.log(JSON.stringify(data));

const jsonString = JSON.stringify(data);

const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.address);

// function
// function nameOfTheFunction(param1, param2, ..., paramN) {
//     statements; // body of the function
//     return value; // optional
// }

function isEven(value) {
    // return value % 2 === 0;
    if (value % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function countEvens(arr) {
    let countOfEven = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            countOfEven = countOfEven + 1;
        }
    }
    return countOfEven;
}

function countByCondition(arr, condition) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const countElement = condition(arr[i]);
        if (countElement) {
            count = count + 1;
        }
    }
    return count;
}


let count = countEvens(array2);
console.log("array 2 even numbers = ", count);


count = countByCondition(array2, isEven);
console.log("array 2 even numbers = ", count);

function isGreaterThan5(value) {
    return value > 5;
}

count = countByCondition(array2, isGreaterThan5);
console.log("array 2 numbers > 5 = ", count);

const elementsGreaterThan5 = array2.filter(isGreaterThan5);
console.log(elementsGreaterThan5);

const filteredValues = array2.filter(v => v > 5);
console.log(filteredValues);
