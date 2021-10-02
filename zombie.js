class undead {
    constructor(x, y, width, height,angle){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("zombie.png"); 
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position
      var ang = this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(ang)
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      //fill(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)))
      pop();
     
  }
}