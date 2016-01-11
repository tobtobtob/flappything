

function updateSquare(dt){
  
  //do the jump if jump to be done
  if(doJump && !jumpDone){
    square.velY = -500;
    jumpDone = true;
    doJump = false;
    
  }
  //update velocity
  if(square.velY < square.maxVel){
    square.velY += dt*square.accY;
  }
  //update position
  square.y = square.y+dt*square.velY;
  if(square.y+square.height > square.maxY){
    square.y = square.maxY-square.height
  }
  if(square.y < 0){
    square.y = 0;
  }
}

function drawSquare(){
    ctx.beginPath();
    ctx.rect(square.x, square.y, square.height, square.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function initSquare(){
  square.y = canvas.height/2-square.height/2;
}
