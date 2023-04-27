let sizeTarget;
let opacityLine = 80;
let speed = 0.01;
let width = 3000;
let height = 1080;
let inc = 3;
let strokeline = 10;
let variation;
let variation2;

function preload() {}

function setup() {
  let c = createCanvas(width, height);
  c.parent("provacanvas");

  colorMode(HSB, 360, 100, 100, 100);
  sizeTarget = random(width / 30, width / 2.5);
  rectMode(CENTER);

  variation = random(0.0001, 0.0008);
  variation2 = random(0.0001, 0.0008);
}

function draw() {
  background(0, 0, 70, 10);
  // strokeWeight(1);
  // rect(width / 2, height / 2, width);

  noStroke();
  fill(0, 100, 100);
  ellipse(width / 2, height / 2, sizeTarget);
  beginShape(LINES);
  for (let x = 0; x < width; x += inc) {
    noFill();
    strokeWeight(strokeline);
    stroke(0, 0, 0, opacityLine);
    // let offset = noise(x * variation) * height;
    let offset =
      noise(x * variation, x * variation, frameCount * speed) * height;
    vertex(x, offset);
  }
  endShape();

  beginShape(LINES);
  for (let y = 0; y < height; y += inc) {
    noFill();
    strokeWeight(strokeline);
    stroke(0, 0, 0, opacityLine);
    // let offset = noise(y * variation) * height;
    let offset =
      noise(y * variation, y * variation, frameCount * speed) * width;
    vertex(offset, y);
  }
  endShape();

  // if (frameCount >= 50) {
  //   noLoop();
  //   save(`sketch-${frameCount}.png`);
  // }
}
