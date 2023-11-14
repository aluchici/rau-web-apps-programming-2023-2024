console.log(document);

// create HTML elements + CSS
const h1 = document.createElement("h1");
h1.style = "color: blue";
h1.innerText = "Welcome to my page!";

// find parent
const body = document.getElementsByTagName("body")[0];

// append h1 to parent
body.appendChild(h1);

const button = document.createElement("button");
button.innerText = "Click me!"
button.onclick = buttonPressed;

body.appendChild(button);

const checkBox = document.createElement("input");
checkBox.type = "checkbox";
body.appendChild(checkBox);

// sterg elemente HTML + CSS
// let nClicks = 0;
let nClicks = sessionStorage.getItem("nClicks");
nClicks = parseInt(nClicks);
if (!nClicks) {
    nClicks = 0;
}

function buttonPressed() {
    const checkBox = document.getElementsByTagName("input")[0];
    if (checkBox.checked) {
        nClicks = 0;
        checkBox.checked = false;
    } 

    nClicks = nClicks + 1;
    sessionStorage.setItem("nClicks", nClicks);
    // alert("You pressed the button!");
    const existingParagraph = document.getElementById("buttonPressed");
    if (existingParagraph) {
        existingParagraph.innerText = `Button pressed ${nClicks} times`;
    } else {
        const p = document.createElement("p");
        p.id = "buttonPressed";
        p.innerText = `Button pressed ${nClicks} times`;
        body.appendChild(p);
    }
}