  class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':2,
      }
      this.body = Bodies.circle(70, 60, 20, [options]);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      strokeWeight("3");
      stroke("black");
      ellipse(70,60,55,55);
      pop();
    }
  };
  