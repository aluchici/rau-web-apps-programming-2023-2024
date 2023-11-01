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
    // TODO: DEBUG THIS. NOT READY!
    const inputs = document.getElementsByClassName("input-style");
    const checkbox = document.getElementById("checkbox");

    if (checkbox.checked === false) {
        const errorMessage = document.createElement("p");
        const body = document.getElementsByTagName("body")[0];
        errorMessage.id = "errorMessage";
        errorMessage.innerText = "Something went wrong! You didn't agree with our T&C!";
        errorMessage.style = "font-size: 20px; color: red;";
        body.appendChild(errorMessage);
    }
    if (inputs[1].value === "") {
        const errorMessage = document.createElement("p");
        const body = document.getElementsByTagName("body")[0];
        errorMessage.id = "errorMessage";
        errorMessage.innerText = "Something went wrong! Your email is empty!";
        errorMessage.style = "font-size: 20px; color: red;";
        body.appendChild(errorMessage);
    }
    data = {
        "email": inputs[1].value,
        "password": inputs[2].value
    }

    const request = new XMLHttpRequest();
    request.open("POST", "https://reqres.in/api/register");
    
    request.onload = processData;
    
    request.send(JSON.stringify(data));
}

function processData() {
    console.log("Done!");
}