
function setup() {
  createCanvas(800, 800);
  textSize(40);
}

function draw() {

var colorR = 83;
var colorG = 155;
var colorB = 226;

var newColor = map (mouseX,0, width,0, 255)

background(newColor,colorG,colorB)
noStroke();  
fill(156,161,164);
square(200, 400, 400);
fill(235,12,12)
triangle(100, 400, 700, 400, 400,100);
rect(450, 650, 95, 300);
fill(0,0,0)
rect(250, 670, 140, 90);
rect(250, 470, 140, 90);
rect(450, 470, 100, 90);
fill(84,78,78)
rect(680, 600, 20, 200);
fill(249,242,39)
ellipse(150, 100, 120, 120);
ellipse(690, 600, 70, 70); 

drawWords(width * 0.25);
}

function drawWords(x) {
// The text() function needs three parameters:
// the text to draw, the horizontal position,
// and the vertical position
fill(0);
text('MPF', 20, 780);
}


