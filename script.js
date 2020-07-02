const DEBUG = false;

let score = 0;

let gameOver = false;

const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d');


canvas.style.marginLeft = '30%';
canvas.style.background = 'LightGreen';

let snake = [
  { x: 280, y: 240 },
  { x: 260, y: 240 },
  { x: 240, y: 240 },
  { x: 220, y: 240 },
  { x: 200, y: 240 },
  { x: 180, y: 240 },
  { x: 160, y: 240 },
  { x: 140, y: 240 }
]

let snakeSpeedHorizontal = 0;
let snakeSpeedVertical = 0;



let randomApplePlaceX = 0;//variables I want to move the apple randomly with
let randomApplePlaceY = 0;

let framesPerSecond = 30;
//debugger;
let timerId = setInterval(function () {
  //console.log('this timer ran')
  moveTheSnake();
  detectingWalls();
  snakeBitItself();
  eatenApple();
  drawEverything();
}, 10000 / framesPerSecond);



window.onload = function () { // function to paint canvas and set interval
  setApplePosition()

  if (randomApplePlaceX === snake[0].x || randomApplePlaceX === snake[0].y || randomApplePlaceY === snake[0].x || randomApplePlaceY === snake[0].y) {
    randomApplePlaceX = randomApplePlaceX + 20 //if statement to not let the apple land on the snake
    randomApplePlaceY = randomApplePlaceY + 20
  }




  canvas.addEventListener('click', function () { //event listener to reset the game after clicking the screen when game is over
    // debugger;
    if (gameOver === true) {
      // clearInterval(timerId) // me trying to stop the game interval
      score = 0;
      let yourScore = document.getElementById('your-score');
      yourScore.textContent = 'Your Score: ' + score;
      gameOver = false;

      setApplePosition();

      let newInterval = setInterval(function () {
        //console.log('this timer ran')
        moveTheSnake();
        detectingWalls();
        snakeBitItself();
        eatenApple();
        drawEverything();
      }, 10000 / framesPerSecond);

       newInterval = timerId;
      snake = [
        { x: 280, y: 240 },
        { x: 260, y: 240 },
        { x: 240, y: 240 },
        { x: 220, y: 240 },
        { x: 200, y: 240 },
        { x: 180, y: 240 },
        { x: 160, y: 240 },
        { x: 140, y: 240 }
      ];
      

      snakeSpeedHorizontal = 0;
      snakeSpeedVertical = 0;
    }
  })

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
  if (gameOver === true) {
    return
  }
  console.log(snake[0].y);

  if (snakeSpeedHorizontal !== 0 || snakeSpeedVertical !== 0) {
    for (let i = snake.length - 1; i > 0; --i) {
      snake[i].x = snake[i - 1].x;
      snake[i].y = snake[i - 1].y;
    }
  }

  snake[0].x = snake[0].x + snakeSpeedHorizontal;
  snake[0].y = snake[0].y + snakeSpeedVertical;
  
}


function snakeBitItself() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      return alert('game over')
    }
  }
}

function detectingWalls() {
  if (snake[0].x > canvas.width - 20) {  //if statements to detect the walls
    return alert('game over');
  }

  if (snake[0].x < 0) {
    return alert('game over')
  }

  if (snake[0].y > canvas.height - 20) {
    return alert('game over');
  }

  if (snake[0].y < 0) { // the top boundary
    stopInterval();
    gameOver = true; // test case to blank out the screen because top border was hit
  }
}

function stopInterval() {
  clearInterval(timerId)
}

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

document.addEventListener('keydown', function (e) { // event listener tomove the snake head and eventually snake body
  if (e.which === 37) { // left arrow
    if (snakeSpeedHorizontal === 20) {
      return
    } else {
      snakeSpeedHorizontal = -20;
      snakeSpeedVertical = 0;
    }
  }

  if (e.which === 39) { // right arrow
    if (snakeSpeedHorizontal === -20) {
      return
    } else {
      snakeSpeedHorizontal = 20;
      snakeSpeedVertical = 0;
    }
  }

  if (e.which === 38) { //up arrow
    if (snakeSpeedVertical === 20) {
      return
    } else {
      snakeSpeedHorizontal = 0;
      snakeSpeedVertical = -20;
    }
  }

  if (e.which === 40) { //down arrow
    if (snakeSpeedVertical === -20) {
      return
    } else {
      snakeSpeedHorizontal = 0;
      snakeSpeedVertical = 20;
    }
  }

})


function drawEverything() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);

  if (gameOver === true) {// if statemenet to blank out the screen after hitting the top wall
    canvasContext.fillStyle = 'white'
    canvasContext.fillText(' Game is over: click to continue', 300, 300)
    return;
  }


  canvasContext.beginPath();
  snake.forEach(function (bodyPart) {
    canvasContext.rect(bodyPart.x, bodyPart.y, 20, 20)
  });
  canvasContext.fillStyle = "skyblue";
  canvasContext.fill();
  canvasContext.closePath();

  canvasContext.fillStyle = 'lightCoral';
  canvasContext.fillRect(randomApplePlaceX, randomApplePlaceY, 20, 20) //Code for the apple

}

/*
stop interval
*/
