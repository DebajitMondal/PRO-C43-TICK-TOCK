var hr, min, sec;
var secAngle, minAngle, hrAngle;



function setup() {
  createCanvas(400,400);


}

function draw() {
  background(0);



  drawSprites();



  push();
  translate(200,200)
  rotate(-90)

  angleMode(DEGREES);

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  //Seconds Hand
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  //Minutes Hand
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  //Hour Hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  //Centre Point
  stroke(255,0,255);
  point(0,0)

  //Arcs
  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
  pop();
}