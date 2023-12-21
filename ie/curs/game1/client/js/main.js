let time = 0;
let score = 0;

const scoreParagraph = document.getElementById("score");
scoreParagraph.innerText = `Score: ${score}`;

const timeParagraph = document.getElementById("time");
timeParagraph.innerText = `Time: ${time}`;

function redirectToDashboard() {
    window.location.replace("dashboard.html");
}

function save() {
    // Create request body
    const data = {
        "score": score,
        "time": time
    }
    const dataJSON = JSON.stringify(data);

    // Get session id
    const sessionId = parseInt(localStorage.getItem("session-id"));
    
    // Define BE resourse URL 
    const URL = `http://localhost:5001/api/v1/save/${sessionId}`;

    // build a request object
    const request = new XMLHttpRequest();

    // open a connection to my api 
    request.open("PUT", URL);

    // customise the request 
    request.setRequestHeader("Access-Control-Allow-Credentials", "true");
    request.setRequestHeader("Content-Type", "application/json");
    
    // specify what happens when data arrives 
    request.onload = processSaveSuccess;
    
    // specify what happens when an error occurs
    request.onerror = processSaveError; 

    // send the data 
    request.send(dataJSON);

    function processSaveSuccess() {
        if (request.status == 200) {
            alert("Session saved!");
        }
    }

    function processSaveError() {
        if (request.status == 400 || request.status == 404 || request.status == 500) {
            alert("Failed to save session. Please try again");
        }
    }


}