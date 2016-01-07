
function updateCat(dt){
  //do the jump if jump to be done
  if(doJump && !jumpDone){
    cat.velY = -500;
    jumpDone = true;
    doJump = false;
    
  }
  //update velocity
  if(cat.velY < cat.maxVel){
    cat.velY += dt*cat.accY;
  }
  //update position
  cat.y = cat.y+dt*cat.velY;
  if(cat.y+cat.height > cat.maxY){
    cat.y = cat.maxY-cat.height
  }
  if(cat.y < 0){
    cat.y = 0;
  }
}

function drawCat(){
    ctx.beginPath();
    ctx.rect(cat.x, cat.y, cat.height, cat.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
