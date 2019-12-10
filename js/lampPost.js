class LampPost{

    constructor(x,y,size,color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    show(){
        stroke(255);
        strokeWeight(windowHeight*0.006);
        line(this.x,this.y,this.x,this.y-this.size);
        line(this.x,this.y-this.size,this.x+this.size/3,this.y-this.size);
        arc(this.x+this.size/3,this.y-this.size*0.87,this.size/4,this.size/4,0.9*PI,1.9*PI);
    }

    getX(){
      return this.x;
    }

    getY(){
      return this.y;
    }

    getSize(){
      return this.size;
    }

}
