let rightPressed = false;
let leftPressed = false;
let upPressed = false; 
let downPressed = false;

function keyPressed(event) {
    console.log(event);
    if (event.key === "ArrowRight") {
        rightPressed = true;
    } else if (event.key === "ArrowLeft") {
        leftPressed = true;
    }

    if (event.key === "ArrowUp") {
        upPressed = true;
    } else if (event.key === "ArrowDown") {
        downPressed = true;
    }
}

function keyReleased(event) {
    console.log(event);
    if (event.key === "ArrowRight") {
        rightPressed = false;
    } else if (event.key === "ArrowLeft") {
        leftPressed = false;
    }

    if (event.key === "ArrowUp") {
        upPressed = false;
    } else if (event.key === "ArrowDown") {
        downPressed = false;
    }
}

// Inregistrez evenimentele
document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyReleased, false);


const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawRect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    // ctx.stroke();
    ctx.fill();
}

let xPlayer = 100;
let yPlayer = 200;
let rPlayer = 50;

function drawPlayer() {
    if (rightPressed) {
        xPlayer += 3;
    } else if (leftPressed) {
        xPlayer -= 3;
    } 

    if (upPressed) {
        yPlayer -= 3;
    } else if (downPressed) {
        yPlayer += 3;
    }

    // TODO: modify such that circle can go through the empty space between
    // the two rectangles.
    if (xPlayer >= 350 - rPlayer) {
        xPlayer -= 3;
    }

    drawCircle(xPlayer, yPlayer, rPlayer);
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();

    drawRect(350, 0, 5, 200);
    drawRect(350, 300, 5, 300);
}

animate();