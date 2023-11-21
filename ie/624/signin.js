function submit() {
    const inputs = document.getElementsByTagName("input");
    console.log(inputs);

    alertIfEmpty(inputs[0]);
    alertIfEmpty(inputs[1]);

    if (inputs[0].style.borderColor == "green" && inputs[1].style.borderColor == "green") {
        const existingErrorMessage = document.getElementById("errorMessage");
        if (existingErrorMessage) {
            existingErrorMessage
            .parentElement
            .removeChild(existingErrorMessage
                .parentElement
                .lastElementChild
            );                
        }
        
        const data = {
            email: inputs[0].value,
            password: inputs[1].value,
            check: inputs[2].checked
        }
        console.log(data);
    } else {
        const existingErrorMessage = document.getElementById("errorMessage");
        if (!existingErrorMessage) {
            // create element
            const p = document.createElement("p");

            // edit
            p.id = "errorMessage";
            p.innerText = "Something went wrong... Please try again...";
            p.style = "grid-column: 2; grid-row: 8;"
            
            // extract parent 
            const parent = document.getElementsByClassName("signin-grid")[0];
            parent.appendChild(p);
        }
    }
}

function alertIfEmpty(input) {
    // verific daca valoarea inputului == ""
    if (input.value == "") {
        // daca == "", schimb border-color in rosu
        input.style.borderColor = "red";
        // inputs[0].style = "border-color: red;";
    } else {
        input.style.borderColor = "green";
    }
}