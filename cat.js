
function updateCat(dt){
  //update velocity
  if(cat.velY < cat.maxVel){
    cat.velY += dt*cat.accY;
  }
  //update position
  cat.y = cat.y+dt*cat.velY;
  if(cat.y+cat.height > cat.maxY){
    cat.y = cat.maxY-cat.height
  }
}

function drawCat(ctx){
    ctx.beginPath();
    ctx.rect(cat.x, cat.y, cat.height, cat.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
