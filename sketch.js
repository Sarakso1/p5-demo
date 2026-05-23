var bouncables = [];
var frequency = 0;

var setupScript = function() {};
var drawScript = function() {};
var keyPressedScript = function () {};

var canvasX = 500;
var canvasY = 500;

function setup() {
  var canvas = createCanvas(canvasX, canvasY);
  canvas.parent('p5-canvas')
}

function draw() {
  background(220);

  drawScript();
}

function keyPressed(){
  keyPressedScript();
}
