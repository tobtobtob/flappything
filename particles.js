
var particles = [];
var nparticles = 30;
var particleSize = 7;

var particleTime = 1;


function initParticles(n){
  nparticles = n;
  for (i=0; i<nparticles; i++){
    particles[i] = {x:0, y:0, xVel:0, yVel:0, alpha:0};
  }
}

var xDirection = -1;

function changeXDirection(){
  xDirection = 1;
}

function shootParticle(p){
  p.xVel = xDirection*(Math.random()*150)-75;
  p.yVel = (Math.random()*150)-75;
  p.x = cat.x+cat.height/2;
  p.y = cat.y+cat.height/2;
  p.alpha = 1;
}

function updateParticle(p, dt){
  p.x += dt*p.xVel;
  p.y += dt*p.yVel;
  p.alpha -= dt;
  if(p.alpha < 0) p.alpha = 0;
}

function drawParticle(p){
  var prevAlpha = ctx.globalAlpha;
  ctx.globalAlpha = p.alpha*ctx.globalAlpha;
  
  ctx.beginPath();
  ctx.rect(p.x, p.y, particleSize, particleSize);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  
  ctx.globalAlpha = prevAlpha;
}

var lastParticle = 0;

function updateParticles(dt){
  lastParticle += dt;
  for (i=0; i<nparticles; i++){
    if(particles[i].alpha < 0.1 && Math.random() < lastParticle){
      shootParticle(particles[i]);
      lastParticle = 0;
    }
    updateParticle(particles[i], dt);
  }
  
}

function drawParticles(){
  
  for (i=0; i<nparticles; i++){
    drawParticle(particles[i]);
  }
  
  ctx.globalAlpha = 1;
}

