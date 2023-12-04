let rightPressed = false;
let leftPressed = false; 
let upPressed = false; 
let downPressed = false; 
let firePressed = false; 

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
    draw();
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
}

let bulletX = 0;
let bulletY = 0;
function startFire(event) {
    firePressed = true;
    bulletX = x; 
    bulletY = y;
}

function stopFire(event) {
    firePressed = false;
}

document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyUp, false);
document.addEventListener("mousedown", startFire, false);
document.addEventListener("mouseup", stopFire, false);

const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

let x = 95;
let y = 50;
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (rightPressed) {
        x += 5;
    } else if (leftPressed) {
        x -= 5;
    }

    if (upPressed) {
        y -= 5;
    } else if (downPressed) {
        y += 5;
    }

    if (x > canvas.width) {
        x = x - canvas.width;
    } else if (x < 0) {
        x = canvas.width + x;
    }

    if (y > canvas.height) {
        y = y - canvas.height;
    } else if (y < 0) {
        y = canvas.height + y;
    }

    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.stroke();
}

let drawEnemy = true; 

console.log(drawEnemy, bulletX, canvas.width - 50, canvas.width - 65);
    
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw player
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.stroke();

    // draw bullet 
    if (firePressed) {
        ctx.beginPath();
        ctx.arc(bulletX, bulletY, 5, 0, 2 * Math.PI);
        ctx.stroke();
    }

    bulletX += 5;
    bulletY += 0;
    if (bulletX > canvas.width) {
        bulletX = 0;
    }

    // draw enemy 
    if (drawEnemy) {
        ctx.beginPath();
        ctx.arc(canvas.width - 50, canvas.height - 100, 30, 0, 2 * Math.PI);
        ctx.fill();
    }

    // check if enemy overlaps with bullet 
    
    if (bulletX < canvas.width - 50 && bulletX > canvas.width - 65 &&
        bulletY < canvas.height - 100 && bulletY > canvas.height - 115) {
        drawEnemy = false; 
    }
}

animate();