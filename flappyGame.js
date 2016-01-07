
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var cat = {x:50, y:canvas.height/2-10, velY: 100, height:20, accY:100, maxVel: 200, maxY: canvas.height};



function update(dt){
  updateCat(dt);
  updateBlocks(dt);
  
}

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  drawCat(ctx);
  drawBlocks(canvas);
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
