/*class Stone {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution :0,
        friction :1,
        density : 1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("stone.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    push();
   
    rect(pos.x, pos.y, this.width, this.height);
  pop();
  }
};
*/
class Stone  {
  constructor(x,y,w,h){
    var options = {
      isStatic: false,
      restitution :0,
      friction :1,
      density : 1.2

  }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
      
        World.add(world, this.body);
    this.image = loadImage("stone.png");
    //Matter.Body.setMass(this.body,this.body.mass*6);
    //this.body.frictionAir = 0.001;
  }

  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
     imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    
    pop();
  }
 
}
