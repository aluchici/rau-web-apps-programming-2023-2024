console.log("Welcome to intro.js");

let primaVariabila = 10; // camelcase
const aDouaVariabila = 2 + 4; 

console.log("prima variabila = ", primaVariabila);
console.log("a doua variabila = ", aDouaVariabila);

primaVariabila = 1.23;

const caracter = "v"; // 'v'
const sirDeCaractere = "Sir de caractere"; // 'Sir de caractere'
const sirDeCaracterePeSteroizi = `Sir de caractere. Valoare primei variabile este ${primaVariabila}`;

console.log(sirDeCaractere);
console.log(sirDeCaracterePeSteroizi);

const True = true;
const False = false;

const array = [1, 2, 3, 4, 5, "text", false];
console.log(array[0]);
array[0] = 10;
console.log(array[0]);

const obj = {
    "name": "IE",
    "year": 2023,
    "city": "Bucharest",
    "students": [
        {"name": "A"},
        {"name": "B"}
    ]
}
console.log(obj["name"])
console.log(obj.name);
obj.name = "Info Eco";
console.log(obj["name"])
console.log(obj.name);

console.log(obj["students"]);

const objText = JSON.stringify(obj);
console.log(objText.name);

const parsedObj = JSON.parse(objText);
console.log(parsedObj);

// Structuri de control 
const a = 10;
const b = 20;
let sum = 0;
let indx = a;

// while (conditie) {
//     ce vreau sa repete
// }
while (indx < b) {
    sum = sum + indx;
    indx = indx + 1;
}
console.log(sum);

// for (let i = start_value; i < end_value; i++) {
    // ce vreau sa repet
// }
sum = 0;
for (let i = a; i < b; i++) {
    sum = sum + i;
}
console.log(sum);

let value = 0;
for (let i = 0; i < 10; i++) {
    let innerValue = 0;
    for (let j = 0; j < 20; j++) {
        innerValue += j; // innerValue = innerValue + j;
    }
    value += innerValue;
}