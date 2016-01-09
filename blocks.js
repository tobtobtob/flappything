blocks = [];
nblocks = 5;

firstBlock = 300;
blockDist = 125;
blockWidth = 20;
blockHeight = 100;
blockSpeed = 70;

var blendMargin = 100;


function randomBlockHeight(){
  return (canvas.height/2)*(Math.random()+0.5);
}

function randomY(height){
  if(Math.random() > 0.5){
    return 0;
  }
  return canvas.height-height;
}


function initBlocks(){
  for(i=0; i<nblocks; i++){
    blocks[i] = {x: firstBlock+i*blockDist, y:0, height:0};
    blocks[i].height = randomBlockHeight();
    blocks[i].y = randomY(blocks[i].height);
  }
}

function updateBlocks(dt){
  blockSpeed = 70+timeSeconds;
  for(i=0; i<nblocks; i++){
    b = blocks[i];
    b.x -= dt*blockSpeed;
    //put an out-of-view block behind it's successor
    if(b.x+blockWidth < 0){
      b.x = blocks[(i-1+nblocks) % nblocks].x+blockDist;
      b.height = randomBlockHeight();
      b.y = randomY(b.height);
    }
  }
}

function drawBlocks(){
  for(i=0; i<nblocks; i++){
    b = blocks[i];
    var prevAlpha = ctx.globalAlpha;
    
    if(b.x < blendMargin) ctx.globalAlpha *= ((Math.max(b.x, 0))/(blendMargin));
    if(b.x + blockWidth > canvas.width - blendMargin) ctx.globalAlpha *= ((canvas.width-b.x)/blendMargin);
    
    ctx.beginPath();
    ctx.rect(b.x, b.y, blockWidth, b.height);
    ctx.fillStyle = gameColor;
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = prevAlpha;
  }
}
