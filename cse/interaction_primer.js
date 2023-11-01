// Interaction with existing elements
// 1. get the element(s) you want
// 2. you change / modify your element

const h1 = document.getElementById("title");
const data = {
    "username": "johndoe",
    "color_preference": {
        "text": "white",
        "background": "magenta"
    },
    "welcome_message": "Howdy, J.D!"
}

// h1.style = "color: " + data.color_preference.text;
h1.style = `color: ${data.color_preference.text}`;
h1.innerText = data.welcome_message;

const body = document.getElementsByTagName("body")[0];
body.style = "background-color: " + data.color_preference.background;

const paragraphs = document.getElementsByTagName("p");
for (const p of paragraphs) {
    p.style = "color: " + data.color_preference.text;
}

const spans = document.getElementsByTagName("span");
for (const span of spans) {
    span.style = "color: " + data.color_preference.text;
}

// Creating new elements and adding them to the DOM
// 1. create the element
// 2. customize the element
// 3. add the element at the right (desired) level [adding this element to the corresponding parent node]
// 3.1. get the parent 
// 3.2. decide where to add the elements w.r.t. the parent's children
// 3.3. add the element to the corresponding location (index) 

function addSearchButton() {
    // const existingButton = document.getElementById("searchButton");
    // if (existingButton) {
    //     return;
    // }
    const parentNode = document.getElementsByName("placeOfInterest")[0];
    if (parentNode.children.length === 3) {
        const buttonToDelete = document.getElementById("searchButton");
        parentNode.removeChild(buttonToDelete);
        return;
    }

    // step 1
    const button = document.createElement("button");

    // step 2
    button.innerText = "Search";
    button.style = "border-radius: 10px; background-color: gray; margin-left: 30%";
    button.id = "searchButton";

    // step 3
    const div = document.getElementsByName("placeOfInterest")[0];

    const submitButton = document.getElementsByClassName("submit-style")[0];
    div.replaceChild(button, submitButton);
    div.appendChild(submitButton);
}