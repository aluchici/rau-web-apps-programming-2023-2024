// Actiuni (Interactiune)
// 1. ce are voie sa faca un utilizator 
// - poate apasa pe taste stanga, dreapta, sus, jos
// - poata apasa pe butonul mouse-ului

// 3. definim ce se intampla cand au loc evenimentele dorite (posibile)
let rightPressed = false; 
let leftPressed = false; 
let upPressed = false; 
let downPressed = false; 
let mouseButtonPressed = false; 

function keyPressed(event) {
    console.log(event);
    if (event.keyCode === 39) {
        rightPressed = true;
    } else if (event.keyCode === 37) {
        leftPressed = true;
    } 

    if (event.keyCode === 40) {
        downPressed = true;
    } else if (event.keyCode === 38) {
        upPressed = true;
    }
    console.log(rightPressed, leftPressed, upPressed, downPressed);
}

function keyReleased(event) {
    console.log(event);
    if (event.keyCode === 39) {
        rightPressed = false;
    } else if (event.keyCode === 37) {
        leftPressed = false;
    } 

    if (event.keyCode === 40) {
        downPressed = false;
    } else if (event.keyCode === 38) {
        upPressed = false;
    }
    console.log(rightPressed, leftPressed, upPressed, downPressed);
}

function mousePressed(event) {
    console.log(event);
    mouseButtonPressed = true;
    console.log("Mouse pressed: ", mouseButtonPressed);
}

function mouseReleased(event) {
    mouseButtonPressed = false;
    console.log("Mouse pressed: ", mouseButtonPressed)
}

// 2. definim event listeners 
document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyReleased, false);
document.addEventListener("mousedown", mousePressed, false);
document.addEventListener("mouseup", mouseReleased, false);


// Randare (ce apare pe ecran)
// 1. ce vede utilizatorul dupa o anumita actiune
const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}

let xPlayer = 10; // coordonata x a jucatorului
let yPlayer = 20; // coordonate y a jucatorului
let rPlayer = 40; // raza cercului (jucatorul)
let playerStep = 1;
function drawPlayer() {
    if (rightPressed) {
        xPlayer += playerStep;
    } else if (leftPressed) {
        xPlayer -= playerStep;
    }

    if (upPressed) {
        yPlayer -= playerStep;
    } else if (downPressed) {
        yPlayer += playerStep
    }

    // TODO: fix this to allow circle to pass through the empty space
    if (xPlayer >= 200 - rPlayer && xPlayer <= 205 + xPlayer && yPlayer < 150 || (yPlayer > 150 && yPlayer < 350)) {
        xPlayer -= playerStep;
    }

    drawCircle(xPlayer, yPlayer, rPlayer);
}

function drawRect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fill();
}

function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();

    drawRect(200, 0, 5, 150);

    drawRect(200, 350, 5, 150);
}
animate();