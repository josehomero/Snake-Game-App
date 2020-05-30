const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d')
canvas.style.marginLeft = '30%';
canvas.style.background = 'gray';
let snakeHeadX = 255; // to move the snake on the x-axis
let snakeHeadY = 250; // me attempting to move the snake left  which = 37
let snakeSpeedHorizontal = 0;
let snakeSpeedVertical = 0;

window.onload = function () { // function to paint canvas and set interval
  let framesPerSecond = 30;
  setInterval(function() {
    moveTheSnake();
    drawEverything();
  }, 10000/framesPerSecond)
}

function moveTheSnake() {
  snakeHeadX = snakeHeadX + snakeSpeedHorizontal;
  snakeHeadY = snakeHeadY + snakeSpeedVertical;
}

document.addEventListener('keydown', function (e) { // me trying to make an eventListener to make the snake go left, which: 37 is the left arrow key
  if(e.which === 37) { // left arrow
    snakeSpeedHorizontal = -15
    snakeSpeedVertical = 0;
    return;
  }

  if (e.which === 39) { // right arrow
    snakeSpeedHorizontal = 15
    snakeSpeedVertical = 0;
    return;
  }

  if(e.which === 38) {// up arrow
    snakeSpeedHorizontal = 0;
    snakeSpeedVertical = -15;
    return;
  }

  if (e.which === 40) { // down arrow
    snakeSpeedHorizontal = 0;
    snakeSpeedVertical = 15;
    return;
  }

 })

function drawEverything() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);// these canvasContext are describing and moving the snake to the right 
  canvasContext.beginPath();
  canvasContext.rect(snakeHeadX, snakeHeadY, 60, 20);
  canvasContext.fillStyle = "#FF0000";
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(20, 80, 20, 20)

}


