let rightPressed = false; 
let leftPressed = false; 
let upPressed = false; 
let downPressed = false; 
let mouseButtonPressed = false; 

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
}

function keyReleased(event) {
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
    if (event.clientX > 0 && event.clientX < canvas.width && event.clientY > 0 && event.clientY < canvas.height) {
        mouseButtonPressed = true;
        console.log("Mouse pressed: ", mouseButtonPressed);
        xPlayer = event.clientX;
        yPlayer = event.clientY;
    }
}

function mouseReleased(event) {
    mouseButtonPressed = false; 
    console.log("Mouse pressed: ", mouseButtonPressed);
}

document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyReleased, false);
document.addEventListener("mousedown", mousePressed, false);
document.addEventListener("mouseup", mouseReleased, false);

// Draw elements 
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
    ctx.stroke();
}

let xPlayer = 50;
let yPlayer = 50;
let rPlayer = 25;
let playerStep = 1;

function drawPlayer() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (rightPressed) {
        xPlayer += playerStep;
    } else if (leftPressed) {
        xPlayer -= playerStep;
    }

    if (upPressed) {
        yPlayer -= playerStep;
    } else if (downPressed) {
        yPlayer += playerStep;
    }

    if (xPlayer === rPlayer) {
        xPlayer += playerStep;
    }

    if (xPlayer === canvas.width - rPlayer) {
        xPlayer -= playerStep;
    }

    if (yPlayer === rPlayer) {
        yPlayer += playerStep;
    }

    if (yPlayer === canvas.height - rPlayer) {
        yPlayer -= playerStep;
    }

    drawCircle(xPlayer, yPlayer, rPlayer);
}

let xBullet = xPlayer;
let yBullet = yPlayer;
let bulletWidth = 7;
let bulletHeight = 5;

function drawBullet() {
    drawRect(xBullet, yBullet, bulletWidth, bulletHeight);
}

let xEnemy = 250;
let yEnemy = 250;
let enemyWidth = 100;
let enemyHeight = 100;
function drawEnemy() {
    gradient = ctx.createLinearGradient(xEnemy, 0, xEnemy+enemyWidth, 0);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(xEnemy, yEnemy, enemyWidth, enemyHeight);
    drawRect(xEnemy+10, yEnemy, enemyWidth-10, enemyHeight)
}

let enemyDied = false;
let playerDied = false; 

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw player
    if (playerDied === false) {
        drawPlayer();
    } else {
        xPlayer = -1;
        yPlayer = -1;
    }

    // draw bullet 
    if (mouseButtonPressed && playerDied === false) {
        drawBullet();
        xBullet += 10;
    } else {
        xBullet = xPlayer;
        yBullet = yPlayer;
    }

    // draw enemy
    const isBulletOutsideEnemy = xBullet > xEnemy && xBullet < xEnemy + enemyWidth && yBullet > yEnemy && yBullet < yEnemy + enemyHeight;
    const isPlayerOutsideEnemy = (xPlayer < xEnemy || xPlayer > xEnemy + enemyWidth) || (yPlayer < yEnemy || yPlayer > yEnemy + enemyHeight);

    if (isBulletOutsideEnemy && isPlayerOutsideEnemy) {
        enemyDied = true;
    }
    if (enemyDied === false) {
        drawEnemy();
        xEnemy += Math.cos(Math.random() * 3 - 4);
        yEnemy += Math.sin(Math.random() * 3 - 4);
    } else {
        xEnemy = -1;
        yEnemy = -1;
    }

    if (isPlayerOutsideEnemy === false) {
        playerDied = true;
    } 


}
animate();