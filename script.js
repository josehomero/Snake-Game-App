const DEBUG = true;

const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d')
canvas.style.marginLeft = '30%';
canvas.style.background = 'LightGreen';
//let snakeHeadX = 240;
//let snakeHeadY = 240;
const snake = [
  {x: 240, y: 240},
  {x: 260, y: 240},
  {x: 280, y: 240}
]

let snakeSpeedHorizontal = 0;
let snakeSpeedVertical = 0;


let randomApplePlaceX = 0;//variables I want to move the apple randomly with
let randomApplePlaceY = 0;

window.onload = function () { // function to paint canvas and set interval
  setApplePosition()

  if (randomApplePlaceX === snake[0].x || randomApplePlaceX === snake[0].y || randomApplePlaceY === snake[0].x || randomApplePlaceY === snake[0].y) {
    randomApplePlaceX = randomApplePlaceX + 20 //if statement to not let the apple land on the snake
    randomApplePlaceY = randomApplePlaceY + 20
  }

  let framesPerSecond = 30;
  setInterval(function () {
    moveTheSnake();
    drawEverything();
  }, 10000 / framesPerSecond)
}

function setApplePosition() { //function to move apple randomly 
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

function moveTheSnake() { // function to move snake
  snake.forEach(function (bodyPart) {
    bodyPart.x = bodyPart.x + snakeSpeedHorizontal;
    bodyPart.y = bodyPart.y + snakeSpeedVertical;
  });

  snake.x = snake.x + snakeSpeedHorizontal; // adding snakeSpeedHorizontal to move the snake sideways
  snake.y = snake.y + snakeSpeedVertical; // adding snakeSpeedVertical to move the snake virtical

  if (snake[0].x > canvas.width - 20) {  //if statements to detect the walls
    return alert('game over');
  }

  if (snake[0].x < 0) {
    return alert('game over')
  }

  if (snake[0].y > canvas.height - 20) {
    return alert('game over');
  }

  if (snake[0].y < 0) {
    return alert('game over');
  }
 
  if (snake[0].x === randomApplePlaceX && snake[0].y === randomApplePlaceY) {
    return alert('you"ve eaten an apple')
  }
}

document.addEventListener('keydown', function (e) { // event listener tomove the snake head and eventually snake body
  if (e.which === 37) { // left arrow
    snakeSpeedHorizontal = -20
    snakeSpeedVertical = 0;
    return;
  }

  if (e.which === 39) { // right arrow
    snakeSpeedHorizontal = 20
    snakeSpeedVertical = 0;
    return;
  }

  if (e.which === 38) { //up arrow
    snakeSpeedHorizontal = 0;
    snakeSpeedVertical = -20;
  }

  if (e.which === 40) { //down arrow
    snakeSpeedHorizontal = 0;
    snakeSpeedVertical = 20;
    return;
  }

})

function drawEverything() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);// the snake head
  canvasContext.beginPath();
  snake.forEach(function (bodyPart) {
    canvasContext.rect(bodyPart.x, bodyPart.y, 20, 20) 
  });
  canvasContext.rect(snake[0,1,2].x, snake[0,1,2].y, 20, 20);
  canvasContext.fillStyle = "skyblue";
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.fillStyle = 'lightCoral';
  canvasContext.fillRect(randomApplePlaceX, randomApplePlaceY, 20, 20) //Code for the apple

}
