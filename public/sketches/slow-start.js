function sketchSetup() {
  rectMode(CENTER);
}

let speed = .008;
let max = 5.0;
let min = 1.0;
let currentRotation = 3.0;

function draw() {
  background(255)
  
  if (speed > 0) {
    if (currentRotation < max) {
      currentRotation += speed;

    } else {
      speed *= -1;
    }
  }
  if (speed < 0) {
    if (currentRotation > min) {
      currentRotation += speed;
    } else {
      speed *= -1;
    }
  }

  translate(width / 2, height / 2);
  for(let i = 10; i > 0; i--) {
    rotate(PI / currentRotation );
    square(0, 0, i*((W/40) * (currentRotation/4)))
  }
}
