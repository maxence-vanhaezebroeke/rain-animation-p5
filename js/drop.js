class Drop {

    constructor(x,y,speed,size){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
    }

    
    fall() {
        this.x = this.x - 1;
        this.y = this.y + this.speed;
    }

    show(){
        stroke(255)
        strokeWeight(0.2)
        line(this.x,this.y,this.x-1,this.y+this.size)

        //rect(this.x, this.y, this.x-this.size/3, this.y+this.size, 50, 2, 50, 10);
    }

    setY(y){
        this.y = y;
    }

    setX(x){
        this.x = x;
    }

    getX(){
        return this.x;
    }
    
    getY(){
        return this.y;
    }
    
}