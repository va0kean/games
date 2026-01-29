const ball = document.getElementById('ball');
let ballInterval;
let ySpeed = 0;
let xSpeed = 0;

function moveBall() {
    let rect = ball.getBoundingClientRect();
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    if (rect.top > 0 && ySpeed < 0) {
        ySpeed = 0;
    } else if (rect.bottom < vh && ySpeed > 0) {
        ySpeed = 0;
    }
    
    if (rect.left > 0 && xSpeed < 0) {
        xSpeed = 0;
    } else if (rect.right < vw && xSpeed > 0) {
        xSpeed = 0;
    }
    
    ball.style.transform = `translate(${rect.left + xSpeed}px, ${rect.top + ySpeed}px)`;
}

function jumpBall() {
    ySpeed = -10;
    xSpeed = 0;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        jumpBall();
    } else if (event.key === 'ArrowLeft') {
        xSpeed = -5;
    } else if (event.key === 'ArrowRight') {
        xSpeed = 5;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        xSpeed = 0;
    }
});

document.getElementById('ball').addEventListener('click', jumpBall);

ballInterval = setInterval(moveBall, 20);
