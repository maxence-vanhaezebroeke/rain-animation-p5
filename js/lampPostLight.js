class LampPostLight {

  constructor(x,y,size,color){
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
  }


  show(){
    fill(this.color);
    noStroke();
    quad(this.x + this.size/4.5, this.y + this.size*(-0.834),
          this.x + this.size/8, windowHeight/1.5,
          this.x + this.size/1.12,windowHeight/1.5,
          this.x + this.size/2.25, this.y + this.size*(-0.9065));
  }

}
