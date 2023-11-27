// As a user, when I click submit, I want to see an alert if the remember me checkbox is checked.

// - user - not of interest
// - I - not of interest 
// entitatile:
// - submit 
// - alert 
// - checkbox
// actiunile:
// - click
// - see alert
// - is checked
// conditii:
// - pt checkbox: is checked? => display alert 

function submit() {
    // verific daca checkbox is checked
    // 1. extract checkbox from DOM (getElementBy...)
    const checkbox = document.getElementById("checkbox");

    // 2. verific valoarea elementului
    if (checkbox.checked == true) {
        alert("Ai apasat pe 'Remember me'!");
    }
}

// As a user, when I click submit, I want to see a message above the button informing me
// if I pressed "Remember me" or not.

// entitati - actiuni - conditii:
// - submit - click
// - message - display - 1. button pressed; 2. checkbox checked => message = value1 else message = value2; 3. display above button
// - button -  
// - remember me checkbox - checked - 
function buttonClicked() {
    const message = document.createElement("p");
    message.style = "grid-column: 2; grid-row: 5;";

    const checkbox = document.getElementById("checkbox");
    if (checkbox.checked == true) {
        message.innerText = "Remember me checked";
    } else {
        message.innerText = "Remember me NOT checked";
    }

    const button = document.getElementById("submit");
    const parent = button.parentElement;

    parent.insertBefore(message, button);
}
