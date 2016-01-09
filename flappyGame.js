
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var timeSeconds = 0;
var running = true;

var gameColor = "#555555";


var cat = {x:150, y:canvas.height/2-10, velY: 100, height:20, accY:2000, maxVel: 300, maxY: canvas.height, moving: true};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var doJump = false;
var jumpDone = false;

function keyDownHandler(e) {
  if(e.keyCode == 38){
    doJump = true;
  }
}
function keyUpHandler(e) {
  if(e.keyCode == 38){
    doJump = false;
    jumpDone = false;
  }
}

function stopGame(){
  running = false;
  changeXDirection();
  //ctx.globalAlpha = 0.2;
  
}

function collisionDetection(){
  for(i=0; i<nblocks; i++){
    if(blocks[i].x < cat.x+cat.height && cat.x < blocks[i].x+blockWidth){
      if(cat.y < blocks[i].y+blocks[i].height && cat.y+cat.height >blocks[i].y){
        stopGame();
      }
    }
  }
}



function update(dt){

  if(running){
  timeSeconds += dt;
  updateCat(dt);
  updateBlocks(dt);
  
  }
  if(running) updateParticles(dt);
  collisionDetection();
  
}

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  
  drawBlocks();
  
  drawParticles();
  drawCat();
  if(!running) drawEndText();
}

var lastTime = Date.now();

function main(){
  var now = Date.now();
  var dt = (now-lastTime)/1000.0;

  update(dt);
  draw();
  lastTime = now;
  requestAnimationFrame(main);
}

initBlocks();
initParticles(60);
main();
