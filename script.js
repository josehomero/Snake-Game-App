let gameOver = false;

let snake;

let snakeSpeedHorizontal = 0;
let snakeSpeedVertical = 0;

let randomApplePlaceX = 0;
let randomApplePlaceY = 0;

const speed = 20;

let framesPerSecond = 75;
let timerId = setInterval(function () {
  moveTheSnake();
  detectingWalls();
  snakeBitItself();
  eatenApple();
  drawEverything();
}, 10000 / framesPerSecond);

function setSnakePosition() {
  snake = [
    { x: 280, y: 240 },
    { x: 260, y: 240 },
    { x: 240, y: 240 }
  ]
}

window.onload = function () {
  setApplePosition();
  setSnakePosition();

  if (randomApplePlaceX === snake[0].x || randomApplePlaceX === snake[0].y || randomApplePlaceY === snake[0].x || randomApplePlaceY === snake[0].y) {
    randomApplePlaceX = randomApplePlaceX + speed;
    randomApplePlaceY = randomApplePlaceY + speed;
  }

  canvas.addEventListener('click', function () {
    if (gameOver === true) {
      score = 0;
      let yourScore = document.getElementById('your-score');
      yourScore.textContent = 'Your Score: ' + score;
      gameOver = false;

      setApplePosition();
      setSnakePosition();

      timerId = setInterval(function () {
        moveTheSnake();
        detectingWalls();
        snakeBitItself();
        eatenApple();
        drawEverything();
      }, 10000 / framesPerSecond);

      snakeSpeedHorizontal = 0;
      snakeSpeedVertical = 0;
    }
  })

}

document.addEventListener('keydown', function (e) {
  if (e.which === 37) { // left arrow key
    if (snakeSpeedHorizontal === speed) {
      return
    } else if (snakeSpeedHorizontal === 0 && snakeSpeedVertical === 0) {
      return
    } else {
      snakeSpeedHorizontal = -speed;
      snakeSpeedVertical = 0;
    }
  }

  if (e.which === 39) { // right arrow key
    if (snakeSpeedHorizontal === -speed) {
      return
    } else {
      snakeSpeedHorizontal = speed;
      snakeSpeedVertical = 0;
    }
  }

  if (e.which === 38) { // up arrow key
    if (snakeSpeedVertical === speed) {
      return
    } else {
      snakeSpeedHorizontal = 0;
      snakeSpeedVertical = -speed;
    }
  }

  if (e.which === 40) { // down arrow key
    if (snakeSpeedVertical === -speed) {
      return
    } else {
      snakeSpeedHorizontal = 0;
      snakeSpeedVertical = speed;
    }
  }

})


function moveTheSnake() {
  if (gameOver === true) {
    return
  }

  if (snakeSpeedHorizontal !== 0 || snakeSpeedVertical !== 0) {
    for (let i = snake.length - 1; i > 0; --i) {
      snake[i].x = snake[i - 1].x;
      snake[i].y = snake[i - 1].y;
    }
  }

  snake[0].x = snake[0].x + snakeSpeedHorizontal;
  snake[0].y = snake[0].y + snakeSpeedVertical;
}

function setApplePosition() {
  randomApplePlaceX = Math.floor(Math.random() * canvas.width);
  randomApplePlaceX = Math.ceil(randomApplePlaceX / speed) * speed;
  if (randomApplePlaceX === 500) {
    randomApplePlaceX = 480;
  }

  randomApplePlaceY = Math.floor(Math.random() * canvas.height);
  randomApplePlaceY = Math.ceil(randomApplePlaceY / speed) * speed;
  if (randomApplePlaceY === 500) {
    randomApplePlaceY = 480;
  }
}

function stopInterval() {
  clearInterval(timerId)
  gameOver = true;
}

let score = 0;
function scored() {
  score += 1;
  let yourScore = document.getElementById('your-score');
  yourScore.textContent = 'Your Score: ' + score;
}

function eatenApple() {
  if (snake[0].x === randomApplePlaceX && snake[0].y === randomApplePlaceY) {
    scored();
    setApplePosition()
    const headCopy = Object.assign({}, snake[0]);
    snake.push(headCopy);
  }
}

function detectingWalls() {
  if (snake[0].x > canvas.width - speed) {
    stopInterval();
  }

  if (snake[0].x < 0) {
    stopInterval();
  }

  if (snake[0].y > canvas.height - speed) {
    stopInterval();
  }

  if (snake[0].y < 0) {
    stopInterval();
  }
}

function snakeBitItself() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      stopInterval();
    }
  }
}

const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d');
canvas.style.marginLeft = '30%';
canvas.style.background = 'LightGreen';

function drawEverything() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);

  if (gameOver === true) {
    canvasContext.fillStyle = 'black';
    canvasContext.font = canvasContext.font.replace(/\d+px/, '30px')
    canvasContext.fillText(' Game is over: click to continue', 47, 250)

    return;
  }

  canvasContext.beginPath();
  snake.forEach(function (bodyPart) {
    canvasContext.rect(bodyPart.x, bodyPart.y, speed, speed)
  });
  canvasContext.fillStyle = "skyblue";
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.fillStyle = 'lightCoral';
  canvasContext.fillRect(randomApplePlaceX, randomApplePlaceY, speed, speed)
}