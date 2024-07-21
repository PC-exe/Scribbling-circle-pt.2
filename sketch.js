function setup() {
  createCanvas(700, 600);
  background(229,244,227);
}

//An empty hollow circle make strokes along with the mouse
function draw() {
  noFill()
  circle(mouseX, mouseY, 150)
}
