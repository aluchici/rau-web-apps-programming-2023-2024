// Calculator 
// Implementeaza un calculator cu 20 de taste. Calculatorul are doua zone. 
// Zona 1 in care afiseaza valorile introduse sau rezultatul calculului. 
// Zona 2 unde ultilizatorul poate introduce
// valori sau selecta operatori dand click pe butoanele: 
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +/-, ., *, /, +, - , =]
// De asemenea, utilizatorul poate sterge valoarea calculata dand click pe butonul "CE" sau "C".

// entitati - actiuni - conditii 
// calculator - NA - NA  
// taste - click - NA 
// zona1 - display - NA 
// zona2 - NA - NA 


const calculator = document.createElement("div");
calculator.style.height = "500px";
calculator.style.width = "300px";
calculator.style.borderColor = "green";
calculator.style.borderWidth = "2px";
calculator.style.borderStyle = "solid";
calculator.style.borderRadius = "20px";

const zone1 = document.createElement("div");
zone1.style.height = "100px";
zone1.style.width = "295px";
zone1.style.borderColor = "blue";
zone1.style.borderWidth = "2px";
zone1.style.borderStyle = "dashed";
zone1.style.borderRadius = "20px";

const zone2 = document.createElement("div");
zone2.style.height = "390px";
zone2.style.width = "295px";
zone2.style.borderColor = "blue";
zone2.style.borderWidth = "2px";
zone2.style.borderStyle = "dashed";
zone2.style.borderRadius = "20px";
zone2.classList.add("taste");

calculator.appendChild(zone1);
calculator.appendChild(zone2);

const body = document.getElementsByTagName("body")[0];
body.appendChild(calculator);

const display = document.createElement("p");
display.innerText = "0";
display.style.fontSize = "22px";
zone1.appendChild(display);

function createButton(buttonId, buttonText, func) {
    const button = document.createElement("button");
    button.innerText = buttonText;
    button.id = buttonId;
    button.style.borderRadius = "10px";
    button.onclick = func;

    return button;
}

let lastResult = 0;

function pressCE() {
    display.innerText = 0;
}

function pressC() {
    display.innerText = 0;
    lastResult = 0;
}

function press0() {
    display.innerText = 0;
}
function press1() {
    display.innerText = '1';
}
function press2() {
    display.innerText = '2';
}
function press3() {
    display.innerText = '3';
}
function press4() {
    display.innerText = '4';
}
function press5() {
    display.innerText = '5';
}
function add() {
    lastResult = lastResult + parseFloat(display.innerText);
    display.innerText = lastResult;
}
function subtract() {
    lastResult = lastResult - parseFloat(display.innerText);
    display.innerText = lastResult;
}
function multiply() {
    lastResult = lastResult * parseFloat(display.innerText);
    display.innerText = lastResult;
}
function divide() {
    lastResult = lastResult / parseFloat(display.innerText);
    display.innerText = lastResult;
}

function compute() {

}

const buttonFaces = [
    "CE",
    "C",
    "DEL",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "="
];

const funcs = [
    pressCE,
    pressC,
    press1,
    divide,
    press1,
    press1,
    press1,
    multiply,
    press4,
    press5,
    press1,
    subtract,
    press1,
    press2,
    press3,
    add,
    press1,
    press0,
    press1,
    compute
];

for (let i=0; i < 20; i++) {
    const button = createButton(i, buttonFaces[i], funcs[i]);
    zone2.appendChild(button);
}