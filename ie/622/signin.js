// when I click submit, I want to 
// -- display a red border color if an input is empty
// -- display an error message if at least one input is empty. 
// the error message should be displayed below the "sign up" text
// -- if the border is red and the input has data, change it back to green

function submit() {
    // 1. border color --> actiunea = sa devina rosie (reinitializeaza prop border color cu valoarea "red")

    // 2. input --> verific daca e gol sau nu --> verific daca proprietatea value este un string gol ("")
    // --> schimb proprietata border color pt input curent in "red" (1)
    const inputs = document.getElementsByTagName("input");
    console.log(inputs);

    for (const input of inputs) {
        changeInputColor(input);
    }

    const existingErrorMessage = document.getElementById("errorMessage");
    if (!existingErrorMessage) {
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "Oooops! Something went wrong...";
        errorMessage.style = "grid-column: 2; grid-row: 8;";
        errorMessage.id = "errorMessage";
        
        const parent = document.getElementById("main");
        parent.appendChild(errorMessage);
    } else {
        existingErrorMessage.innerText = "Iar ai gresit?"
    }
}

function changeInputColor(input) {
    if (input.value == "") {
        // input.style = "border-color: red;";
        input.style.borderColor = "red";
    }
}