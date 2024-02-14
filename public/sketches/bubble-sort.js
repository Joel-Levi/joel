
const itemsToSort = 100;
let items = [];

let H = 0;
let W = 0;

function setup() {
    var canvasDiv = document.getElementById('canvas');
    W = canvasDiv.offsetWidth;
    H = canvasDiv.offsetHeight;
    var sketchCanvas = createCanvas(W,H);
    sketchCanvas.parent("canvas");
    textAlign(CENTER, CENTER);

    for (let n = 0; n< itemsToSort; n++) {
        items.push({
            i: n,
            beingSwapped: false,
            correct: false,
        })
    }
    shuffleArray(items)
    console.log(items)
    
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function bubbleSort(items) {
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < items.length - 1 - i; j++) {
                if (items[j] > items[j+1]) {
                    const tmp = items[j];
                    items[j] = items[j+1];
                    items[j+1] = tmp;
                } 
            }
        }
}

function swapWithNext(items, j, prop) {
        if (items[j][prop] > items[j+1][prop]) {
            const tmp = items[j][prop];
            items[j][prop] = items[j+1][prop];
            items[j+1][prop] = tmp;
        } 
}

framesPerSort = 1;
i = 0;
j = 0;

function draw() {
    background(255)
    const sqrt = Math.floor(Math.sqrt(items.length))
    console.log(sqrt)
    
    for (let x = 0; x < sqrt; x++) {
        for (let y = 0; y < sqrt; y++) {
            const xPos = x*(W/sqrt) + (W/sqrt/2) 
            const yPos = y*(H/sqrt) + (H/sqrt/2) 
            fill(items[x+(sqrt*y)]['correct'] ? color(100, 255, 100) : 255)
            circle(xPos,yPos,30)
            fill(0)
            text(items[x+(sqrt*y)]['i'], xPos,yPos)
        }
    }

    if (Math.floor(frameCount % framesPerSort) === 0) {
        if (i < items.length) {
            if (j < items.length - 1 - i) {
                swapWithNext(items,j, 'i')
                j++;
            }
        }
        if (j === items.length -1 -i) {
            i++;
            items[j].correct = true
            j = 0;
        }
    }
    


}
