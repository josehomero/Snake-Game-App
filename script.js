const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d')
canvas.style.marginLeft = '30%';
canvas.style.background = 'LightGreen';
let snakeHeadX = 220; // to move the snake on the x-axis
let snakeHeadY = 240; // me attempting to move the snake left  which = 37
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
  //if snakeHead goes beyond canvas.width
  //if snakHead goes beyond canvas.height
  // if snakeHead goes beyond
  if (snakeHeadX > canvas.width - 60) {
    alert('game over');
    return;
  }

  if (snakeHeadX < 0) {
    alert('game over')
    return;
  }

  if (snakeHeadY > canvas.height - 20) {
    alert('game over');
    return;
  }

  if (snakeHeadY < 0) {
    alert('game over');
    return;
  }
}

document.addEventListener('keydown', function (e) { // me trying to make an eventListener to make the snake go left, which: 37 is the left arrow key
  if(e.which === 37) { // left arrow
    snakeSpeedHorizontal = -20
    snakeSpeedVertical = 0;
    return;
  }

  if (e.which === 39) { // right arrow
    snakeSpeedHorizontal = 20
    snakeSpeedVertical = 0;
    return;
  }

  if(e.which === 38) {// up arrow
    snakeSpeedHorizontal = 0;
    snakeSpeedVertical = -20;
    return;
  }

  if (e.which === 40) { // down arrow
    snakeSpeedHorizontal = 0;
    snakeSpeedVertical = 20;
    return;
  }

 })

function drawEverything() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);// these canvasContext are describing and moving the snake to the right 
  canvasContext.beginPath();
  canvasContext.rect(snakeHeadX, snakeHeadY, 60, 20);
  canvasContext.fillStyle = "skyblue";
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.fillStyle = 'lightCoral';
  canvasContext.fillRect(20, 80, 20, 20)

}


