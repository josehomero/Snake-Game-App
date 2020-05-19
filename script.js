var canvas = document.getElementById('game-canvas');
canvas.style.marginLeft = '30%';
canvas.style.background = 'gray';

var canvasContext;


window.onload = function() {
    canvas = document.getElementById('game-canvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30
    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
}

function moveEverything() {

}

//function drawEverything() {
//    colorRect(100, 300, canvas.width, canvas.height, 'gray');
    //colorRect(ballX, 100, 10, 10, 'red');
//}

//function colorRect(leftX, topY, width, height, drawColor) {
//    canvasContext.fillStyle = drawColor;
  //  canvasContext.fillRect(leftX, topY, width, height);
//}