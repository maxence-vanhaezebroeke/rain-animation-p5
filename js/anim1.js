var rain = [];
var floor;

function setup() {
    createCanvas(windowWidth, windowHeight*0.99);

    floor = createGraphics(windowWidth, windowHeight*0.99);
    floor.clear();

    for(i = 0; i < 150; i++){
        rain.push(new Drop(random(0,2*windowWidth), random(-300,-150), random(2.5,50), random(1,windowHeight*0.01)));
    }
    
    for(i = 0; i < 150; i++){
        rain.push(new Drop(random(0,2*windowWidth), random(-150,0), random(2.5,50), random(1,windowHeight*0.01)));
    }

    background(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    floor = createGraphics(windowWidth, windowHeight*0.99);
    document.getElementById("container").margin = "0";
    document.getElementById("container").width= "100%";
}
window.addEventListener('resize', windowResized);


function draw() {

    clear();
    smooth();
    noFill();

    floor.stroke(255);
    floor.line(0, windowHeight/1.5, windowWidth, windowHeight/1.5);
    rain.forEach(function(drop){
        drop.show();
        drop.fall();
        if(drop.getY() > windowHeight/1.515){
            drop.setX(random(0,2*windowWidth));
            drop.setY(random(-100,0));
        }
    });
    
    image(floor,0,0);
}