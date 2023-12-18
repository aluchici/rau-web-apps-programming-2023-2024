// TODO: MOVE THIS TO ONLOAD
// Select the div where the table will be placed

// Create a table element
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
