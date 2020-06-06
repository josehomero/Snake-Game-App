const DEBUG = true;

const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d')
canvas.style.marginLeft = '30%';
canvas.style.background = 'LightGreen';
let snakeHeadX = 220;
let snakeHeadY = 240;
let snakeSpeedHorizontal = 0;
let snakeSpeedVertical = 0;

let randomApplePlaceX = 0;//variables I want to move the apple randomly with
let randomApplePlaceY = 0;

window.onload = function () { // function to paint canvas and set interval
  setApplePosition()

  if (randomApplePlaceX === snakeHeadX || randomApplePlaceX === snakeHeadY || randomApplePlaceY === snakeHeadX || randomApplePlaceY === snakeHeadY) {
    randomApplePlaceX = randomApplePlaceX + 20
    randomApplePlaceY = randomApplePlaceY + 20
  }

  let framesPerSecond = 30;
  setInterval(function () {
    moveTheSnake();
    drawEverything();
  }, 10000 / framesPerSecond)
}

function setApplePosition() {
  randomApplePlaceX = Math.floor(Math.random() * canvas.width);
  randomApplePlaceX = Math.ceil(randomApplePlaceX / 20) * 20;
  if (randomApplePlaceX === 500) {
    randomApplePlaceX = 480;
  }

  randomApplePlaceY = Math.floor(Math.random() * canvas.height);
  randomApplePlaceY = Math.ceil(randomApplePlaceY / 20) * 20;
  if (randomApplePlaceY === 500) {
    randomApplePlaceY = 480;
  }
}

function moveTheSnake() {
  snakeHeadX = snakeHeadX + snakeSpeedHorizontal;
  snakeHeadY = snakeHeadY + snakeSpeedVertical;
  if (snakeHeadX > canvas.width - 60) {
    return alert('game over');
  }

  if (snakeHeadX < 0) {
    return alert('game over')
  }

  if (snakeHeadY > canvas.height - 20) {
    return alert('game over');
  }

  if (snakeHeadY < 0) {
    return alert('game over');
  }
}

document.addEventListener('keydown', function (e) {
  if (e.which === 37) {
    snakeSpeedHorizontal = -20
    snakeSpeedVertical = 0;
    return;
  }

  if (e.which === 39) {
    snakeSpeedHorizontal = 20
    snakeSpeedVertical = 0;
    return;
  }

  if (e.which === 38) {
    snakeSpeedHorizontal = 0;
    snakeSpeedVertical = -20;
    return;
  }

  if (e.which === 40) {
    snakeSpeedHorizontal = 0;
    snakeSpeedVertical = 20;
    return;
  }

})

function drawEverything() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  canvasContext.beginPath();
  canvasContext.rect(snakeHeadX, snakeHeadY, 60, 20);
  canvasContext.fillStyle = "skyblue";
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.fillStyle = 'lightCoral';
  canvasContext.fillRect(randomApplePlaceX, randomApplePlaceY, 20, 20) //Code for the apple

}


