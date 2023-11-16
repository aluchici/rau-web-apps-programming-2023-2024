console.log("How are you?");

let a = 10;
const b = 10.23;

const c = "sir de caractere";
const d = 'sir de caractere';
const e = `valoarea variabilei b este: ${b}`;

console.log(e);

const f = false;
const g = true;

const h = null;
const i = undefined;

const a1 = [1, 2, 3, 4, a, b, c, d, e, f, "new value"];
a1[0] = "new value";
a1[1] = i;

const o1 = {
    nume: "IE",
    year: 2023,
    "numele cheii": "valoare", // nu e recomandat
    grades: [1, 2, 3, 4, 5],
    people: [
        {
            name: "A"
        },
        {
            name: "B"
        }
    ],
    school: {
        "name": "RAU",
        "address": {
            street: "Expo 1B"
        }
    }
}

console.log(o1);
o1.nume = "CSE";
o1["year"] = 2024;
console.log(o1);

console.log(o1.grades);
console.log(o1.grades[0]);
console.log(o1.school);
console.log(o1.school.name);

console.log(o1.people[1].name);

// if (conditie) {
//     ...
// } else if (alta conditie) {
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

// Eliminam duplicatele dintr-un array (Extragem valorile unice)
// 1. declaram array-ul, a, a = [1, 1, 1, 2, 3, 1, 2, 2, 3, 8, 9,9,9,9,9,7,7,7]
const arr1 = [1, 1, 1, 2, 3, 1, 2, 2, 3, 8, 9, 9, 9, 9, 9, 7, 7, 7];

// 2. declaram un array pentru a tine minte valorile unice, u, u = []
const u = [];

// 3. pentru fiecare element din a, e1
for (const e1 of arr1) {
    // 3.1. daca e1 nu exista deja in u, adauga e1 in u
    // const e1IndexInArr1 = u.indexOf(e1);
    // if (e1IndexInArr1 < 0 || e1IndexInArr1 == undefined) {
    //     u.push(e1);
    // }
    let ok = false; // presupun ca nu exista e1 in u
    for (const u1 of u) {
        if (u1 == e1) {
            ok = true;
            break;
        }
    }
    if (ok == false) {
        u.push(e1);
    }
    // 3.2. daca e1 exista in u, mergi mai departe la urmatorul element 
}
console.log(arr1);
// console.log(u.sort((a, b) => b - a)); // descending 
console.log(u.sort()); // ascending

