function setup() {
  createCanvas(600, 360);
  background(0);
  for (var i = 0; i < 10000; i++){
    var x = random(width);
    var y = random(height);
    var r = 5
    fill(134, 235, 221, 50);
    noStroke();
    ellipse(x, y, r*2, r*2); //diameters
  }
}

function draw() {

}