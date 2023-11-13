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

// if (conditie) {
//     ...
// } else if (alta conditie) {
//     ...
// } else {
//     ...
// }
user_types = [1, 2, 3];
user_type = 2;
if (user_type == 1) {
    console.log("User Type = ", user_type);
} else if (user_type == 2) {
    console.log("Nu ai voie sa accesezi aceasta pagina.");
} else {
    console.log("Welcome!");
}

if (!(user_type == 1 || user_type == 2)) {
    console.log("User Type = ", user_type);
} else {
    console.log("Welcome!");
}

function checkIfOdd(n) {
    if (n % 2) {
        return true;
    } 
    return false;
}

// function something() {
//     // calcul suma numerelor
//     // produsul numerelor
//     // factorial
//     result = {
//         'suma': suma,
//         'produse': produs,
//         'factorial': factorial
//     };
//     // return [suma, produs, factorial]
//     return result; 
// }

function filter(arr, conditional) {
    const result = []
    for (const element of arr) {
        const keepElement = conditional(element);
        if (keepElement == true) {
            result.push(element);
        }
    } 
    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
result = filter(arr, checkIfOdd);
console.log(result);

function greaterThan7(n) {
    if (n > 7) {
        return true;
    }
    return false;
}

result = filter(result, greaterThan7);
console.log(result);

function context(n) {
    r = inside();

    function inside() {
        return n > 10;
    }
    
    return r;
}

console.log(context(1));

const f = context;

console.log(f(120));