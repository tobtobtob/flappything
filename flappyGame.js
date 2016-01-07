
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var animationID = 0;

var cat = {x:50, y:canvas.height/2-10, velY: 100, height:20, accY:2000, maxVel: 200, maxY: canvas.height};

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

function collisionDetection(){
  for(i=0; i<nblocks; i++){
    if(blocks[i].x < cat.x+cat.height && cat.x < blocks[i].x+blockWidth){
      if(cat.y < blocks[i].y+blocks[i].height && cat.y+cat.height >blocks[i].y){
        console.log("collision");
      }
    }
  }
}

function update(dt){
  updateCat(dt);
  updateBlocks(dt);
  collisionDetection();
  
}

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  drawCat();
  drawBlocks();
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
main();
