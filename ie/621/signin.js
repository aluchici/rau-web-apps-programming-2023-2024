function submit() {
    // Extrage datele din inputs 
    const email = document.getElementById("email");
    console.log(email);
    const checkbox = document.getElementsByName("checkbox");
    console.log(checkbox);
    
    const inputs = document.getElementsByTagName("input");
    console.log(inputs);

    // Verifica daca checkbox-ul este apasat
    if (inputs[2].checked == true) {
        console.log("Checkbox apasat.");
    } 

    changeInputIfEmpty(inputs[0], "Please insert your email...");
    changeInputIfEmpty(inputs[1], "Please insert your password...");

    // Printeaza in consola datele 
    if (inputs[0].value != "" && inputs[1].value != "") {
        const inputData = {
            email: inputs[0].value,
            password: inputs[1].value,
            checked: inputs[2].checked
        };
        console.log(inputData);
    }
}

function changeInputIfEmpty(input, placeholder) {
    if (input.value == "" || input.value == undefined) {
        input.style = "border-color: red;";
        input.placeholder = placeholder;
    }

    if (input.value != "" && input.style.borderColor == "red") {
        input.style.borderColor = "green";
    }
}