blocks = [];
nblocks = 5;

firstBlock = 150;
blockDist = 125;
blockWidth = 20;
blockHeight = 100;
blockSpeed = 50;


function randomBlockHeight(){
  return (canvas.height/2)*(Math.random()+0.5);
}

function randomUp(){
  if(Math.random() > 0.5){
    return true;
  }
  return false;
}


function initBlocks(){
  for(i=0; i<nblocks; i++){
    blocks[i] = {x: firstBlock+i*blockDist, y:0, up:false};
    blocks[i].y = randomBlockHeight();
    blocks[i].up = randomUp();
  }
}

function updateBlocks(dt){
  for(i=0; i<nblocks; i++){
    b = blocks[i];
    b.x -= dt*blockSpeed;
    //put the out-of-view block behind it's successor
    if(b.x+blockWidth < 0){
      b.x = blocks[(i-1+nblocks) % nblocks].x+blockDist;
      b.y = randomBlockHeight();
      b.up = randomUp();
    }
  }
}

function drawBlocks(){
  for(i=0; i<nblocks; i++){
    b = blocks[i];
    ctx.beginPath();
    if(b.up){
      ctx.rect(b.x, b.y, blockWidth, canvas.height-b.y);
    }else{
      ctx.rect(b.x, 0, blockWidth, b.y);
    }
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}
