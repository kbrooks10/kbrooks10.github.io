function setup() {
  createCanvas(1300, 550);
  }
  function draw() {
  if (mouseIsPressed) {
  fill(255, 0, 0);
  } else {
  fill(0, 0, 255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  }