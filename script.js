const canvas = document.getElementById('game-canvas');
const canvasContext = canvas.getContext('2d')
canvas.style.marginLeft = '30%';
canvas.style.background = 'gray';
let snakeMotion = 10;

window.onload = function() {
  const canvas = document.getElementById('game-canvas');
  const canvasContext = canvas.getContext('2d')

  setInterval(draw, 1000)
}

function draw() {
  snakeMotion += 20
  canvasContext.beginPath();
  canvasContext.rect(snakeMotion, 20, 60, 20);
  canvasContext.fillStyle = "#FF0000";
  canvasContext.fill();
  canvasContext.closePath();
}

