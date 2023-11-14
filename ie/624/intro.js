let primaVariabila = 10;
const aDouaVariabila = 12.304;
const a = null;
const b = undefined;
const c = "sir de caractere";
const d = 'sir de caractere';
const e = `sir de caractere cu valori ${primaVariabila}`;
const f = false;
const g = true;

console.log(c.endsWith("a"));

const l1 = [1, 2, 3, a, b, c, d, e, f];
const l2 = [];

l1[1] = "new value";
console.log(l1);
console.log(l1[1]);

l1[0] = [1, 2, 3];
console.log(l1)
console.log(l1[0]);
console.log(l1[0][2]);

l1.fill(-10, 3, 5);
console.log(l1);

const student = {
    name: "John Doe",
    year: 2,
    school: "IE",
    grades: [1, 2, 3, 4, 5, 6],
    "city": "Bucharest",
    carieraDorita: "IT",
};

console.log(student.city);
console.log(student["name"]);

student.city = "Buc";

// &&, ||, !, <, >, ... 
// if (conditia1) {
//     ...a
// } else if (conditia2) {
//     ...a.
// } else if (conditia3) {
//     ...a.
// } else {
//     ...a.
// }

// for (let i = startValue; i <= endValue; i++) {
//     ...a.
// }

// for (const el of array) {
//     ...a.
// }

// while (conditie) {
//     ...a.
// }

// do {
//     ...a.
// } while (conditie);

// Q1. Gaseste toate elementele unice dintr-un array 
// 1. initializez un array cu elemente 
const arr1 = [1, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1];

// 2. initializez un contor, un array gol 
const contor = [];

// 3. pentru fiecare element din array 
for (const currentValue of arr1) {
    // 3.1. daca nu exista in contor => il adaug
    // 3.1.1. presupun ca elementul nu exista => initializez o variabila ok = false
    // 3.1.2. pentru fiecare valoare din contor, verific daca valoarea este egala cu elementul curent
    // 3.1.3. daca valorile sunt egale, ok = true, opresc iteratia
    let ok = false;
    for (const contorValue of contor) {
        if (contorValue === currentValue) {
            ok = true;
            break;
        }
    }
    // shoter code using contor.indexOf(currentValue);
    // 3.2. daca exista, nu fac nimic, trec la urmatorul element, else il adaug in contor
    if (ok === false) {
        contor.push(currentValue);
    }
}
console.log(arr1);
console.log(contor);
