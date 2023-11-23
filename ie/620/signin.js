// As a user when I click "Sign in" I want to:
// -- display a red border for text and 
// password inputs if they are empty.
// -- display an error message below the button area if at 
// least one input is empty
// because I want to know that I made a mistake. 

function signin() {
    // entitati: 
    // - inputs (text + password)
    // > cum indentific inputs? cum le modific?
    const inputs = document.getElementsByTagName("input");
    // const email = inputs[0];
    // const password = inputs[1];
    let email;
    let password;
    for (const input of inputs) {
        if (input.type == "email") {
            email = input;
        } else if (input.type == "password") {
            password = input;
        } 
    }
    console.log(email);
    console.log(password);

    // - border 
    // actiuni (verbe):
    // - display 
    // > actualizez valoarea unei proprietati (border-color)
    // conditii
    // - input gol 
    // > cum evaluez daca input e gol? => verific daca 
    // in input exista caractere
    if (email.value == "") {
        // email.style = "border-color: red;";
        email.style.borderColor = "red";
    }
    if (password.value == "") {
        password.style.borderColor = "red";
    }

    if (email.value == "" || password.value == "") {
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "Ooops! Something went wrong...";
        errorMessage.style = "grid-column: 2; grid-row: 8;"

        const parent = document.getElementById("main");
        parent.appendChild(errorMessage);
    }
}