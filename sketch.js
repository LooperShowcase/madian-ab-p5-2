let img;
function preload() {
  img = loadImage("armani.png");
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  image(img, -25, -95, 60, 60);
  rotate(-90);
  let sc = second();
  let mn = minute();
  let hr = hour();
  noFill();
  stroke("#808080");
  strokeWeight(3);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  let minuteAngle = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  arc(0, 0, 250, 250, 0, minuteAngle);
  let hoursAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hoursAngle);

  push();
  stroke("#808080");
  rotate(secondAngle);
  line(0, 0, 98, 0);
  pop();

  arc(0, 0, 250, 250, 0, minuteAngle);

  push();
  stroke("#808080");
  rotate(minuteAngle);
  line(0, 0, 90, 0);
  pop();

  push();
  stroke("#808080");
  rotate(hoursAngle);
  line(0, 0, 65, 0);
  pop();

  push();
  rotate(-90);
  stroke("white");
  line(0, 190, 0, 200);
  pop();

  push();
  rotate(90);
  textSize(15);
  fill("white");
  text("12", -9, -170);
  pop();

  push();
  rotate(-90);
  stroke("white");
  line(190, 0, 200, 0);
  pop();

  push();
  rotate(90);
  textSize(15);
  fill("white");
  text("9", -185, 5);
  pop();

  push();
  rotate(-90);
  stroke("white");
  line(-190, 0, -200, 0);
  pop();

  push();
  rotate(90);
  textSize(15);
  fill("white");
  text("3", 177, 5);
  pop();

  push();
  rotate(90);
  stroke("white");
  line(0, 190, 0, 200);
  pop();

  push();
  rotate(90);
  textSize(15);
  fill("white");
  text("6", -4, 183);
  pop();
}
