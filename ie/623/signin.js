console.log("Welcome to signin!");

let primaVariabila = 10;
primaVariabila = 20;

const aDouaVariabila = 10.3456;

const aTreiaVariabila = "acesta este un sir de caractere";
const aPatraVariabila = 'acesta este un sir de caractere';
const stringInterpolat = `acesta este un sir de caractere ${primaVariabila}`;
console.log(stringInterpolat);

const obj = {
    name: "IE",
    "desc": "Curs",
    'year': 2023,
    "numeleCursului": "Web Apps"
};

console.log(obj.name);
obj.desc = "Seminar";

obj["year"] = "2023-2024";

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [obj, 10, 20, 40];

console.log(obj);
console.log(arr1);
console.log(arr2);

arr1.fill(10, 2, 5);
console.log(arr1);

arr1[1] = -10;
console.log(arr1);

console.log(arr1.indexOf(1));
// &&, ||, !, ==, !=, ===, !==
// if (conditie) {
//     ...
// } else if (alta conditie) {
//     ...
// } else {
//     ...
// }

// for (let i = startValue; i <= endValue; i++) {
//     ...
// }
// for (let value of array) {
//    ...
//} 
for (let el of arr1) {
    console.log(el);
}

// while (conditie) {
//    ...
// }

// do {
//     ...
// } while (conditie)

// find all unique values in an array 
// 1. initializam array-ul
// 2. initializam un contor, array 
// 3. parcurgem elementele array-ului, unul cate unul 
// 3.1. verific daca elementul curent exista in contor
// 3.1.1. pentru fiecare element din contor
// 3.1.2. verific daca elementul curent == elementul curent din contor 
// 3.1.3. daca sunt egale => exista 
// 3.2. daca exista, merg mai departe la urmatorul element
// 3.3. daca nu exista, il adaug in contor 
const mainArray = [1, 2, 3, 3, 3, 4, 5, 7, 2, 1, 1];
const contor = [];
const counter = {};
for (const el of mainArray) {
    // find all unique elements
    let ok = false; 
    for (const cEl of contor) {
        if (el === cEl) {
            ok = true;
            break;
        }
    }

    if (ok === false) {
        contor.push(el);
    }

    // count how many times each unique el appears in array
    if (counter[el]) {
        counter[el] = counter[el] + 1;
    } else {
        counter[el] = 1;
    }
}

console.log(mainArray);
console.log(contor);
console.log(counter);

// function numeleFunctiei(param1, param2, param3) {
//     ...
//     return value;
// }
function greaterThan5(n) {
    return n > 5;
}

function isEven(n) {
    return n % 2 == 0;
}

function filter(arr, conditional) {
    const result = [];
    for (const el of arr) {
        const keepElement = conditional(el);
        if (keepElement) {
            result.push(el);
        }
    }
    return result;
}

const result = filter(arr1, isEven)
console.log(result);

const result2 = filter(result, greaterThan5);
console.log(result2);

const f = isEven;
