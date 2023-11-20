function submit() {
    const dataAttributes = ["name", "email", "password", "retyped_password"];
    
    const inputs = document.getElementsByTagName("input");

    for (const input of inputs) {
        if (input.value == "") {
            input.style.borderColor = "red";
        } else if (input.value != "" && input.style.borderColor == "red") {
            input.style.borderColor = "green";
        }
    }

    const data = {};
    for (let i = 0; i < inputs.length; i++) {
        const currentInput = inputs[i];
        if (currentInput.value != "") {
            data[dataAttributes[i]] = currentInput.value;
        }
    }
    if (Object.keys(data).length == dataAttributes.length) {
        console.log(data);
    }
}