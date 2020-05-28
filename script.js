const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d')
canvas.style.marginLeft = '30%';
canvas.style.background = 'gray';
let snakeMotion = 10; // to move the snake on the x-axis
let snakeMoveLeft = 0; // me attempting to move the snake left  which = 37
let snakeMoveRight = 0; // which = 39
let snakeMoveUp = 0; //which =38
let snakeMoveDown = 0; // which = 40

window.onload = function () { // function to paint canvas and set interval
  const canvas = document.getElementById('game-canvas');
  const canvasContext = canvas.getContext('2d')



  setInterval(drawEverything, 50)
}

function moveTheSnake() {
  snakeMotion += 5
}

function drawEverything() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);// these canvasContext are describing and moving the snake to the right 
  canvasContext.beginPath();
  canvasContext.rect(snakeMotion, 20, 60, 20);
  canvasContext.fillStyle = "#FF0000";
  canvasContext.fill();
  canvasContext.closePath();


  document.addEventListener('keydown', function (e) { // me trying to make an eventListener to make the snake go left, which: 37 is the left arrow key
    if(e.which === 37) {
      snakeMotion = -10
      snakeMotion -= 20
    }
   })
}
