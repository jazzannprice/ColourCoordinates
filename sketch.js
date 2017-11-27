//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//07_Simple Interaction

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  var mouse1 = map(mouseX, 0, width, 0, 255);
  var mouse2 = map(mouseY, 0, width, 0, 255);
  var mouse3 = map(mouseX, 0, width, 255, 0);
  var mouse4 = map(mouseY, 0, width, 255, 0);

  var color1 = color(0, 60, 100, mouse1);
  var color2 = color(0, 45, 200, mouse2);
  var color3 = color(0, 100, 50, mouse3);
  var color4 = color(0, 255, 255, mouse4);

  fill(color1);
  rect(0, 0, width/2, height/2);

  fill(color2);
  rect(width/2, 0, width/2, height/2);

  fill(color3);
  rect(0, height/2, width/2, height/2);

  fill(color4);
  rect(width/2, height/2, width/2, height/2);

}
