const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d')
canvas.style.marginLeft = '30%';
canvas.style.background = 'gray';
let snakeMotionHorizontal = 20; // to move the snake on the x-axis
let snakeMotionVertical = 0; // me attempting to move the snake left  which = 37
let snakeSpeed = 15;

window.onload = function () { // function to paint canvas and set interval
  let framesPerSecond = 30;
  setInterval(function() {
    moveTheSnake();
    drawEverything();
  }, 10000/framesPerSecond)
}

function moveTheSnake() {
  snakeMotionHorizontal = snakeMotionHorizontal + snakeSpeed;
}

document.addEventListener('keydown', function (e) { // me trying to make an eventListener to make the snake go left, which: 37 is the left arrow key
 // if('keydown' === false) {
  //  snakeMotionHorizontal = 0;
  //  return;
  //}

  if(e.which === 37) {
    snakeSpeed = -15
    return;
  }

  if (e.which === 39) {
    snakeSpeed = 15;
    return;
  }

  if(e.which === 38) {
    snakeMotionHorizontal = 0;
    snakeMotionVertical = 10;
    snakeMotionVertical = snakeMotionVertical + snakeSpeed;
    snakeSpeed = 15;
    return;
  }

  if (e.which === 40) {
    snakeMotionHorizontal = 0;
    snakeMotionVertical = 10;
    snakeMotionVertical = snakeMotionVertical + snakeSpeed;
    snakeSpeed = -15;
    return;
  }

 })

function drawEverything() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);// these canvasContext are describing and moving the snake to the right 
  canvasContext.beginPath();
  canvasContext.rect(snakeMotionHorizontal, snakeMotionVertical, 60, 20);
  canvasContext.fillStyle = "#FF0000";
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(20, 80, 20, 20)

}


