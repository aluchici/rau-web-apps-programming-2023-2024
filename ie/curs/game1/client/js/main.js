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

function play() {
    const playButton = document.getElementById("play");
    if (playButton.innerText === "Pause") {
        playButton.innerText = "Play";
        return;
    }

    // Create request body 
    const userId = localStorage.getItem("user-id");
    const data = {
        "user_id": userId
    };
    const dataJSON = JSON.stringify(data);

    // Create BE endpoint
    const URL = "http://localhost:5001/api/v1/play";

    // Create a request
    const request = new XMLHttpRequest();

    // Open request (connection to BE)
    request.open("POST", URL);

    // Customise the request 
    request.setRequestHeader("Access-Control-Allow-Credentials", "true");
    request.setRequestHeader("Content-Type", "application/json");
    
    // Specify what happens when you get a response 
    request.onload = processPlaySuccess;
    request.onerror = processPlayError;

    // Send data
    request.send(dataJSON);

    function processPlaySuccess() {
        const response = JSON.parse(request.response);

        if (request.status == 200) {
            localStorage.setItem("session-id", response.data.session_id);
            alert("New session created!");

            playButton.innerText = "Pause";
        }
    }

    function processPlayError() {
        const response = JSON.parse(request.response);
        if (request.status == 400 || request.status == 404 || request.status == 500) {
            alert(response.message);
        }
    }

}