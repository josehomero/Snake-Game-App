const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d')
canvas.style.marginLeft = '30%';
canvas.style.background = 'gray';
let snakeMotion = 10; // to move the snake on the x-axis
let snakeMoveLeft = false; // me attempting to move the snake left

window.onload = function () { // function to paint canvas and set interval
  const canvas = document.getElementById('game-canvas');
  const canvasContext = canvas.getContext('2d')

  setInterval(draw, 1000)
}

function draw() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);// these canvasContext are describing and moving the snake to the right 
  canvasContext.beginPath();
  canvasContext.rect(snakeMotion, 20, 60, 20);
  canvasContext.fillStyle = "#FF0000";
  canvasContext.fill();
  canvasContext.closePath();
  snakeMotion += 20

  canvas.addEventListener('keydown.which: 37', function (e) { // me trying to make an eventListener to make the snake go left, which: 37 is the left arrow key
    if (snakeMoveLeft === false) {
      snakeMotion -= 20
    }
  })

}
