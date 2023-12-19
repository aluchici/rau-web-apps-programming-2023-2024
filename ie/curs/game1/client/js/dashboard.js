const userId = localStorage.getItem("user-id");
if (userId === undefined) {
    // throw Error("Not allowed");
    window.location.replace("signin.html");
}


// Get table data from BE 
const tableDataRequest = new XMLHttpRequest()
tableDataRequest.open("GET", `http://localhost:5001/api/v1/last-five-sessions/${userId}`);
tableDataRequest.setRequestHeader("Access-Control-Allow-Credentials", "true");
tableDataRequest.setRequestHeader("Content-Type", "application/json");
tableDataRequest.onload = processTableDataSuccess;
tableDataRequest.onerror = processTableDataError;
tableDataRequest.send();

function processTableDataSuccess() {
    const response = JSON.parse(tableDataRequest.response);
    
    if (tableDataRequest.status == 200) {
        // Select the div where the table will be placed
        var table = document.getElementsByClassName('last-five-sessions')[0];
        table.style.border = '1px solid black';

        const tableData = response.data.last_five_sessions;
    
        for (var i = 0; i < tableData.length; i++) {
            var row = table.insertRow(); // Insert a row

            // Loop to create 2 cells per row
            for (var j = 0; j < 2; j++) {
                var cell = row.insertCell(); // Insert a cell
                if (j == 0) {
                    cell.innerHTML = `Session #: ${tableData[i][j]}`;
                } else {
                    cell.innerHTML = `Score: ${tableData[i][j]}`;
                }
                cell.style.borderBottom = '1px dashed black';
            }
        }
    }
}

function processTableDataError() {

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