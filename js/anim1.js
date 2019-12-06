var rain = [];
var floor;
var started;
var buttonPlay;

window.onload = function(){
    this.buttonPlay();
}

function buttonPlay(){
    buttonPlay = createButton("Play");
    buttonPlay.position(windowWidth/2.17,windowHeight/2.1);
    buttonPlay.mousePressed(start);
}

function setup() {
    createCanvas(windowWidth, windowHeight*0.99);

    floor = createGraphics(windowWidth, windowHeight*0.99);
    floor.clear();

    for(i = 0; i < 150; i++){
        rain.push(new Drop(random(0,2*windowWidth), random(-300,-150), random(7,23), random(1,windowHeight*0.01)));
    }
    
    for(i = 0; i < 150; i++){
        rain.push(new Drop(random(0,2*windowWidth), random(-150,0), random(7,23), random(1,windowHeight*0.01)));
    }

    background(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    floor = createGraphics(windowWidth, windowHeight*0.99);
    buttonPlay.position(windowWidth/2.17,windowHeight/2);
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}
window.addEventListener('resize', windowResized);


function draw() {
    if(started){
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
}

function start(){
    started = true;
    loop();

    var audio = new Audio('ext/rain_sound_effect.wav');
    audio.play();
    audio.volume = 0.6;
    audio.loop = true;

    buttonPlay.remove();
}
