blocks = [];
nblocks = 5;

firstBlock = 300;
blockDist = 125;
blockWidth = 20;
blockHeight = 100;
blockSpeed = 70;

var blendMargin = 100;



//random block height of 0.25-0.75% of the canvas height
function randomBlockHeight(){
  return (canvas.height/2)*(Math.random()+0.5);
}

//this gives a y-coordinate so that it is either floor, or a ceiling block with an equal probability
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
    
    //put an out-of-view block behind it's successor and initialize it with new height value
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
    //save the globalAlpha value so we can restore it after drawing the block
    var prevAlpha = ctx.globalAlpha;
    
    //blocks fade in and out; if they are close enough to the edge of the canvas,
    //they are drawn with alpha value smaller than one
    if(b.x < blendMargin) ctx.globalAlpha *= ((Math.max(b.x, 0))/(blendMargin));
    if(b.x+blockWidth > canvas.width - blendMargin) ctx.globalAlpha *= (Math.max(0, canvas.width-b.x-blockWidth)/(blendMargin-blockWidth));
    
    ctx.beginPath();
    ctx.rect(b.x, b.y, blockWidth, b.height);
    ctx.fillStyle = gameColor;
    ctx.fill();
    ctx.closePath();
    
    ctx.globalAlpha = prevAlpha;
  }
}
