particles = [];
nparticles = 30;
particle_xVel = 50;
particle_yAcc = 1000;
shootProb = 0.1;
particleSize = 5;


function initParticles(){
  for(i=0; i<nparticles; i++){
    particles[i] = {x:0, y:0, yVel: 0, alpha: 0};
  }
}

function updateParticles(dt){
  for(i=0; i<nparticles; i++){
    p = particles[i];
    if(p.alpha < 0.01){
      if(Math.random() < shootProb){
        console.log("particle shot");
        p.x = cat.x+cat.height/2;
        p.y = cat.y+cat.height/2;
        p.yVel = -(200+Math.random()*200);
        p.alpha = 1;
      }
    }else{
      p.x += particle_xVel*dt;
      p.yVel += particle_yAcc*dt;
      p.y += p.yVel*dt;
      p.alpha -= dt*10;
    }
    
  }
}

function drawParticles(){
  for(i=0; i<nparticles; i++){
    p = particles[i]
    ctx.beginPath();
    ctx.rect(p.x, p.y, particleSize, particleSize);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}
