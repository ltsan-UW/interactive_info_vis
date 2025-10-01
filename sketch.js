//custom variables for y-coordinate of sun & horizon
let shapeHeight;

let designWidth = 999;
let designHeight= 999;
let horizon ;
function setup() {
  createCanvas(designWidth,designHeight);
  horizon =height/2;
}

function draw() {

  //shape follows y-coordinate of mouse
  shapeHeight = mouseY;
  currentWidth = mouseX;

  //light blue background if the shape is above horizon

  //with if-else statement
  if (shapeHeight < horizon) {
    background("lightblue"); // blue if above horizon

  } else {
    background("grey"); // grey if below horizon
    text('Hi! My name is Lance', designWidth / 2, designHeight / 2);
  }

  //sun
  fill("white");

  rect(currentWidth - (width/3 - 20) / 2, shapeHeight / 2, width/3);
  textSize(20);
  fill("black");
  text('Hi! My name is Lance', currentWidth - 90, shapeHeight - 20);



  // draw line for horizon
  stroke('lavender');
  line(0,horizon,width,horizon);

  //grass

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  horizon = height / 2; // recalc horizon after resize
}

