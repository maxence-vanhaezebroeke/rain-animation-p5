class Drop {

    constructor(x,y,speed,size){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
    }


    fall() {
        this.x = this.x - 1;
        this.lastY = this.y;
        this.y = this.y + this.speed;
    }

    show(color){
        stroke(color);
        strokeWeight(1200/windowWidth);
        line(this.x,this.y,this.x-1,this.y+this.size);

        //rect(this.x, this.y, this.x-this.size/3, this.y+this.size, 50, 2, 50, 10);
    }

    reset(){
        this.x = random(0,2*windowWidth);
        this.y = random(-100,0);
    }

    hits(lampPost){
      //line(this.x,this.y,this.x,this.y-this.size);
      //line(this.x,this.y-this.size,this.x+this.size/3,this.y-this.size);
      var lpx = lampPost.getX();
      var lpy = lampPost.getY();
      var lps = lampPost.getSize();
      if(this.x > lpx && this.x < lpx+(lps/2.2)
          && this.y > lpy-lps && this.y < lpy){
            return true;
          }
      return false;
    }

    getY(){
        return this.y;
    }

}
