let H = 0;
let W = 0;

function setup() {
    var canvasDiv = document.getElementById('canvas');
    W = canvasDiv.offsetWidth;
    H = canvasDiv.offsetHeight;
    var sketchCanvas = createCanvas(W,H);
    sketchCanvas.parent("canvas");
}
  
function windowResized() {
    var canvasDiv = document.getElementById('canvas');
    W = canvasDiv.offsetWidth;
    H = canvasDiv.offsetHeight;
    resizeCanvas(W, H);
}
  