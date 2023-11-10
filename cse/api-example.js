// EXAMPLE OF GETTING DATA FROM AN API
const request = new XMLHttpRequest();
request.open("GET", "http://localhost:5000/api/user");
request.setRequestHeader("Access-Control-Allow-Credentials", "true");
request.setRequestHeader("Content-Type", "application/json");
request.onload = processData;
request.send();

function processData() {
    const response = JSON.parse(request.response);

    const h1 = document.createElement("h1");
    // h1.innerText = `Welcome, ${response.data[0].first_name}`;
    console.log(response);
}

// EXAMPLE OF SENDING FROM AN API 
function clickToSend() {
    const requestToSendData = new XMLHttpRequest();
    requestToSendData.open("POST", "http://localhost:5000/api/user", true);
    requestToSendData.setRequestHeader("Access-Control-Allow-Credentials", "true");
    requestToSendData.setRequestHeader("Content-Type", "application/json");
    requestToSendData.onload = processRequestToSendDataResponse;

    const data = {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john@email.com",
        "phone": "+22222222",
        "type": 1
    }
    requestToSendData.send(JSON.stringify(data));

    function processRequestToSendDataResponse() {
        const response = JSON.parse(request.response);
        console.log(response);
        const h1 = document.createElement("h1");
        // h1.innerText = `Welcome, ${response.data[0].first_name}`;
    }
}