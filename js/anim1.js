var rain = [];
var lampPost;
var lampPostLight;
var sound = false;
var yellow;
var white;

window.onclick = function() {
    this.startSound();
}

function setup() {
    createCanvas(windowWidth, windowHeight*0.99);

    white = color(255,255,255);
    white.setAlpha(150);
    yellow = color(255,255,0);
    yellow.setAlpha(120);

    for(i = 0; i < 150; i++){
        rain.push(new Drop(random(0,2*windowWidth), random(-300,-150), random(7,26), random(1,windowHeight*0.01)));
    }

    for(i = 0; i < 100; i++){
        rain.push(new Drop(random(0,2*windowWidth), random(-150,0), random(7,26), random(1,windowHeight*0.01)));
    }

    lampPost = new LampPost(windowWidth*0.1,windowHeight*0.66,windowHeight*0.3,yellow);
    lampPostLight = new LampPostLight(windowWidth*0.1,windowHeight*0.66,windowHeight*0.3,yellow);

    background(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    lampPost = new LampPost(windowWidth*0.1,windowHeight*0.66,windowHeight*0.3,yellow);
    lampPostLight = new LampPostLight(windowWidth*0.1,windowHeight*0.66,windowHeight*0.3,yellow);
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}
window.addEventListener('resize', windowResized);


function draw() {
    clear();

    stroke(255);
    strokeWeight(windowHeight/400);
    line(0, windowHeight/1.5, windowWidth, windowHeight/1.5);
    rain.forEach(function(drop){
        if(drop.hits(lampPost)){
            drop.reset();
        } else {
            drop.show(white);
        }
        drop.fall();
        if(drop.getY() > windowHeight/1.515){
            drop.reset();
        }
    });

    lampPost.show();
    lampPostLight.show();
}

function startSound(){
    if(!sound){
        var audio = new Audio('ext/rain_sound_effect.wav');
        audio.play();
        audio.volume = 0.6;
        audio.loop = true;
    }
    sound = true;
}
