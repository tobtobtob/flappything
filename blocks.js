blocks = [];
nblocks = 5;

firstBlock = 150;
blockDist = 125;
blockWidth = 20;
blockHeight = 100;
blockSpeed = 50;


function initBlocks(){
  for(i=0; i<nblocks; i++){
    blocks[i] = {x:firstBlock+i*blockDist};
  }
}

function updateBlocks(dt){
  for(i=0; i<nblocks; i++){
    b = blocks[i];
    b.x -= dt*blockSpeed;
    //put the out-of-view block behind it's successor
    if(b.x+blockWidth < 0){
      b.x = blocks[(i-1+nblocks) % nblocks].x+blockDist;
    }
  }
}

function drawBlocks(canvas){
  for(i=0; i<nblocks; i++){
    b = blocks[i];
    ctx.beginPath();
    ctx.rect(b.x, canvas.height-blockHeight, blockWidth, blockHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}
