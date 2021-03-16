class Stone {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':2,
    }
    this.body = Bodies.rectangle(x, y, 60, 60, options);
    this.width = 60;
    this.height = 60;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("orange");
    strokeWeight("3");
    stroke("green");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
