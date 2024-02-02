let H = 0;
let W = 0;

const circles = []
let mySound;

function setup() {
    var canvasDiv = document.getElementById('canvas');
    W = canvasDiv.offsetWidth;
    H = canvasDiv.offsetHeight;
    var sketchCanvas = createCanvas(W,H);
    sketchCanvas.parent("canvas");
    
    for (let i = 0; i < 11; i++) {
      circles.push({x: i*(W/10), y: H/2, i: i-5, played: false})
    }

    soundFormats('mp3', 'ogg');
    mySound = loadSound('./sounds/c6.mp3');
}
  
function windowResized() {
    var canvasDiv = document.getElementById('canvas');
    W = canvasDiv.offsetWidth;
    H = canvasDiv.offsetHeight;
    resizeCanvas(W, H);
}
  
let xpos = 0;

function draw() {
  let radius = H/16

  background(255)
  line(W/2, 0, W/2, H)
  line(0, H/2, W, H/2)
  
  const xoffset = cos(frameCount/10) * 50
  
  for (const c of circles) {
    const ypos = sin((frameCount/10)*(c.i/4))

    c.x += 0
    c.y = (H/2+ypos * 100)

    fill(c.played ? 0 : 255)
    circle(c.x, c.y, radius)

    if (c.x > W+radius) {
      c.x = 0 - radius
    }
  }
  
}
