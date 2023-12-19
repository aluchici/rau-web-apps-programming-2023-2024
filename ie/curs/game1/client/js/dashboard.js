const userId = localStorage.getItem("user-id");
if (userId === undefined) {
    // throw Error("Not allowed");
    window.location.replace("signin.html");
}

// TODO: MOVE THIS TO ONLOAD
// Select the div where the table will be placed
var table = document.getElementsByClassName('last-five-sessions')[0];
table.style.border = '1px solid black'; 


// Loop to create 5 rows
for (var i = 0; i < 5; i++) {
    var row = table.insertRow(); // Insert a row

    // Loop to create 2 cells per row
    for (var j = 0; j < 2; j++) {
        var cell = row.insertCell(); // Insert a cell
        cell.innerHTML = 'Row ' + (i + 1) + ', Cell ' + (j + 1); // Optional: add some text
        cell.style.borderBottom = '1px dashed black'; 
    }
}


// Get high score from BE 
const highscoreRequest = new XMLHttpRequest()
highscoreRequest.open("GET", `http://localhost:5001/api/v1/high-score/${userId}`);
highscoreRequest.setRequestHeader("Access-Control-Allow-Credentials", "true");
highscoreRequest.setRequestHeader("Content-Type", "application/json");
highscoreRequest.onload = processHighScoreSuccess;
highscoreRequest.onerror = processHighScoreError; 
highscoreRequest.send();

function processHighScoreSuccess() {
    const response = JSON.parse(highscoreRequest.response);

    if (highscoreRequest.status == 200) {
        const highScoreParagraph = document.getElementById("high-score");
        highScoreParagraph.innerText = response.data.highscore;
    }
}

function processHighScoreError() {

}

// Get total time from BE 
const totalTimeRequest = new XMLHttpRequest()
totalTimeRequest.open("GET", `http://localhost:5001/api/v1/total-time/${userId}`);
totalTimeRequest.setRequestHeader("Access-Control-Allow-Credentials", "true");
totalTimeRequest.setRequestHeader("Content-Type", "application/json");
totalTimeRequest.onload = processTotalTimeSuccess;
totalTimeRequest.onerror = processTotalTimeError; 
totalTimeRequest.send();

function processTotalTimeSuccess() {
    const response = JSON.parse(totalTimeRequest.response);

    if (totalTimeRequest.status == 200) {
        const totalTimeParagraph = document.getElementById("total-time");
        totalTimeParagraph.innerText = response.data.total_time;
    }
}

function processTotalTimeError() {

}