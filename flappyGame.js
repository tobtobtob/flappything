
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function update(){
}

function draw(){
}

var lastTime;
function main(){
  var now = Date.now();
  var dt = (now-lastTime)/1000.0;

  update(dt);
  draw();

  lastTime = now;
  requestAnimFrame(main);
};
