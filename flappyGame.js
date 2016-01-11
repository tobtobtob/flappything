
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var square = {x:150, y:canvas.height/2-10, velY: 100, height:20, accY:2000, maxVel: 300, maxY: canvas.height};

var timeSeconds = 0;
var running = true;

var gameColor = "#555555";


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var doJump = false;
var jumpDone = false;

function keyDownHandler(e) {
  if(e.keyCode == 38){
    doJump = true;
  }
  if(e.keyCode == 78){
    if(!running) startGame();
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
  
  //when the game is stopped, the particles will be shot in all directions
  setParticleDirection(1);
  
  var info1 = document.getElementById("firstInfoLine");
  var info2 = document.getElementById("secInfoLine");
  
  info1.innerHTML = "You survived "+Math.floor(10*timeSeconds)/10+" seconds";
  info2.innerHTML = "press 'n' for a new game";
  
}

function startGame(){
  var info1 = document.getElementById("firstInfoLine");
  var info2 = document.getElementById("secInfoLine");
  
  info1.innerHTML = "<br>";
  info2.innerHTML = "press up to jump"
  
  timeSeconds = 0;
  initBlocks();
  initParticles(40);
  initSquare();
  setParticleDirection(-1);
  
  running = true;
  
  
}

function collisionDetection(){

  for(i=0; i<nblocks; i++){
  
    if(blocks[i].x < square.x+square.height && square.x < blocks[i].x+blockWidth){
    
      if(square.y < blocks[i].y+blocks[i].height && square.y+square.height >blocks[i].y){
        stopGame();
      }
    }
  }
}



function update(dt){

  if(running){
  timeSeconds += dt;
  updateSquare(dt);
  updateBlocks(dt);
  
  }
  updateParticles(dt);
  collisionDetection();
  
}

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  
  drawBlocks();
  
  drawParticles();
  drawSquare();
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

startGame();
main();
