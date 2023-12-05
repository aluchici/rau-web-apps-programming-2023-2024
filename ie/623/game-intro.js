let rightPressed = false;
let leftPressed = false;
let upPressed = false; 
let downPressed = false; 
let mousePressed = false; 

function keyPressed(event) {
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
    // drawPlayer();
}

function keyUp(event) {
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

function mouseDown(event) {
    console.log(event);
    if (event.clientX > 0 && event.clientX < canvas.width && event.clientY > 0 && event.clientY < canvas.height) {
        mousePressed = true;
    }
    console.log("Pressed mouse button: ", mousePressed);
}

function mouseUp(event) {
    mousePressed = false; 
    console.log("Pressed mouse button: ", mousePressed);
}

document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyUp, false);
document.addEventListener("mousedown", mouseDown, false);
document.addEventListener("mouseup", mouseUp, false);

const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, r, filled) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);

    if (filled) {
        ctx.fill();
    } else {
        ctx.stroke()      
    }
}

let xPlayer = 50;
let yPlayer = 50;
let rPlayer = 30;
let xBullet = xPlayer;
let yBullet = yPlayer;
let rBullet = 5;

function drawPlayer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (rightPressed) {
        xPlayer += 5;
    } else if (leftPressed) {
        xPlayer -= 5;
    }

    if (upPressed) {
        yPlayer -= 5;
    } else if (downPressed) {
        yPlayer += 5;
    }

    if (xPlayer === canvas.width - rPlayer) {
        xPlayer -= 5;
    }

    if (xPlayer === rPlayer) {
        xPlayer += 5;
    }

    if (yPlayer === canvas.height - rPlayer) {
        yPlayer -= 5;
    }

    if (yPlayer === rPlayer) {
        yPlayer += 5;
    }

    drawCircle(xPlayer, yPlayer, rPlayer, false);
}

let xEnemy = 100;
let yEnemy = 150;
function drawEnemy() {
    drawCircle(xEnemy, yEnemy, 100, true);
    xEnemy += 1;
    yEnemy += 1;
}

let enemyDied = false;
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw player
    drawPlayer(xPlayer, yPlayer, rPlayer, false);

    // fire 
    if (mousePressed) {
        drawCircle(xBullet, yBullet, rBullet, false);
        xBullet += 5;
    } else {
        xBullet = xPlayer;
        yBullet = yPlayer
    }

    // draw enemy
    if (xBullet > xEnemy - 100 && xBullet < xEnemy + 100 && yBullet > yEnemy - 100 && yBullet < yEnemy + 100) {
        enemyDied = true;
    }
    if (enemyDied === false) {
        drawEnemy();
    }
}
animate();


