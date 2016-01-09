function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Time: "+Math.floor(10*timeSeconds)/10, 8, 20);
}

function drawEndText(){
  var prevAlpha = ctx.globalAlpha;
  ctx.globalAlpha = 1;
  
  ctx.font = "16px Courier New";
  ctx.fillStyle = "000000";
  ctx.fillText("You survived "+Math.floor(10*timeSeconds)/10+" seconds", 8, 20);
  ctx.globalAlpha = prevAlpha;
}
