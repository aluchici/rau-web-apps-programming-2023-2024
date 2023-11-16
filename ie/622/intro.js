console.log("How are you?");

let a = 10;
const b = 10.234;

const c = "sir de caractere";
const d = 'sir de caractere';
const e = `valoarea variabilei b este: ${b}`;

const f = true;
const g = false; 

const a1 = [1, 2, 3, 4, 3, a, b, c, d, e, f, g];
a1[2] = "noua valoare";

console.log(c);
const h = c.replace("de", "cu");
const i = c.endsWith("e");
const j = c.toUpperCase();
console.log(h, i, j);

const o1 = {
    name: "IE",
    year: "2023-2024",
    date_start: "3333",
    dateStart: "32334",
    prop1: 1,
    prop2: 2,
    "date start": "34333" // not recom
};
o1.year = "2024-2025";
o1["date start"] = 10;

// &&, ||, !, ==, ===, !=, !==, < ...
// if (expresie care se evalueaza la true sau false) {
//     ...
// } else if (alta expresie) {
//     ...
// } else {
//     ...
// }

// loops 
// for (let i = startValue; i < endValue; i++) {
//     ...
// }

// for (let el of colectie) {
//     ...
// }

// while (conditie) {
//     ...
// }

// do {
//     ...
// } while (conditie)

// Find unique elements in an array (eliminate duplicates).
// 1. initializez array-ul cu elemente. a = [1, 1, 2, 3, 3, 2, 1, 1]
// 2. initializez o variabila sa tin minte elementele unice, uniques = []
// 3. pentru fiecare element din array (a), e1
// 3.1. verificam daca e1 exista in uniques

// 3.1.1. initializez o variabila ok = false (presupun ca nu exista e1 in uniques)
// 3.1.1. parcurgem uniques element cu element, u 
// 3.1.2. verific daca e1 = u
// 3.1.3. daca e1 = u, ok = true, opresc parcurgerea

// 3.2. daca nu exista, il adaugam in uniques
// 3.3. daca exista, merge mai deparete 