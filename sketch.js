var pos;
var pos2;
var pos3;
var slider;
var slider2;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)
  slider = createSlider(0, 15, 0)
  slider2 = createSlider(0, 15, 0)
  pos = 0.0
  inc = 3.0
  pos2 = 0.0
  inc2 = 9.0
  pos3 = 0.0
  inc3 = 9.0
}

function draw() {
clear();
translate(width/2, height/2);
  var mySinVal = map(sin(pos), -1, 1, 0, 30);
  var mySinVal2 = sin(pos2);
  var mySinVal3 = map(sin(pos3), -1, 1, -10, 190);
  amplified = mySinVal * 500;
  amplified2 = mySinVal2 * 50;
  amplified3 = mySinVal3 * 20;
  for (x = 0; x <= 360; x = x + 10) {
    curve(0, 10, 50, 20, amplified2, 10, amplified3, 10);
    fill('orange');
    strokeWeight(0.5);
    stroke('yellow');
    rotate(x);
  }
  pos = pos + slider.value();
  pos2 = pos2 + slider.value();
}

