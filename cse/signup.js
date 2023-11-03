function sampleXMLHttpRequest() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://reqres.in/api/users/1');
    request.onload = viewAllData;


    function viewAllData() {
        console.log("Done!");
        if (request.status == 200) {
            const data = JSON.parse(request.response);
            
            const title = document.getElementById("title");
            title.innerText = "Hello, " + data.data.first_name;

            const img = document.createElement("img");
            img.src = data.data.avatar;

            const body = document.getElementsByTagName("body")[0];
            body.appendChild(img);
        }
    }

    request.send();
}

function submit() {
    const URL = "https://reqres.in/api/users";

    const inputs = document.getElementsByClassName("input-style");
    const checkbox = document.getElementById("checkbox");

    if (checkbox.checked === false) {
        addErrorMessage("Something went wrong! You didn't agree with our T&C!");
        return;
    }
    if (inputs[1].value === ""  || inputs[2].value === "") {
        addErrorMessage("Something went wrong! Your email or email is empty!");
        return;
    }
    
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    const isEmailValid = emailRegex.test(inputs[1].value);
    if (!isEmailValid) {
        addErrorMessage("Invalid email provided. Please try again using a valid email...");
        return;
    }

    data = {
        "email": inputs[1].value,
        "password": inputs[2].value
    }

    const request = new XMLHttpRequest();
    request.open("POST", URL);
    
    request.onload = processData;
    
    request.send(JSON.stringify(data));

    function processData() {
        console.log("User resistered successfully!");
        if (request.status === 200 || request.status === 201) {
            const data = JSON.parse(request.response);
            localStorage.setItem("user-id", data.id);
            // window.location.href = "handyhub/home.html"; // equivalent to a click on a link
            window.location.replace("handyhub/home.html"); // equivalent to a HTTP redirect 
        } 

        if (request.status !== 200 && request.status !== 201) {
            // display an error
            addErrorMessage("Failed to register a new user. Please try again...");
        }
    }
}


function addErrorMessage(message) {
    const existingErrorMessage = document.getElementById("errorMessage");
    if (existingErrorMessage) {
        existingErrorMessage.innerText = message;
    } else {
        const errorMessage = document.createElement("p");
        const parent = document.getElementsByClassName("grid-container")[0];
        errorMessage.id = "errorMessage";
        errorMessage.innerText = message;
        errorMessage.classList.add("error-message"); 
        parent.appendChild(errorMessage);
    }
}