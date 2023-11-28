// 1. Adaugare elemente HTML 
// Implementeaza interfata unui calculator de buzunar. 
// Interfata este reprezentata de un dreptunghi cu 2 zone. Prima zona
// se gaseste in partea de sus a dreptunghiului si repr.
// zona de afisare. A doua zona (sectiune) se regaseste in partea de jos
// a dreptunghiului si contine 20 de celule (butoane).

// entitati - actiuni - conditii 
// - dreptunghiul - NA - NA 
// - zona 1 - afiseaza informatii - partea de sus a dreptunghiului
// - zona 2 - NA - 
// - celule - NA - in zona 2 si numar celule = 20

const rectangle = document.createElement("div");
rectangle.style.width = "350px";
rectangle.style.height = "500px";
rectangle.style.borderColor = "blue";
rectangle.style.borderWidth = "3px";
rectangle.style.borderRadius = "15px";
rectangle.style.borderStyle = "solid";

const body = document.getElementsByTagName("body")[0];
body.appendChild(rectangle);

const zone1 = document.createElement("div");
zone1.style.width = "345px";
zone1.style.height = "145px";
zone1.style.borderColor = "red";
zone1.style.borderWidth = "2px";
zone1.style.borderRadius = "15px";
zone1.style.borderStyle = "dashed";

const zone2 = document.createElement("div");
zone2.style.width = "345px";
zone2.style.height = "345px";
zone2.style.borderColor = "green";
zone2.style.borderWidth = "2px";
zone2.style.borderRadius = "15px";
zone2.style.borderStyle = "dashed";
zone2.classList.add("container");

rectangle.appendChild(zone1);
rectangle.appendChild(zone2);

const display = document.createElement("span");
display.innerText = "103345583";

zone1.appendChild(display);

const buttonDisplay = [
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


for (let i=0; i < 20; i++) {
    const button = createCalculatorButton(i, buttonDisplay[i]);
    zone2.appendChild(button);
}

function compute(event) {
    console.log(event);
}

function createCalculatorButton(buttonId, buttonText) {
    const button = document.createElement("button");
    button.innerText = buttonText;
    button.id = buttonId;
    button.onclick = compute;
    button.style.borderRadius = "20px";
    return button;
}