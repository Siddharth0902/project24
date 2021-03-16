
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber1;
var stone1;
var hammer1;

function setup() {
    var canvas = createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.\

	hammer1 = new Hammer(800,320,100,100);
  stone1 = new Stone(600,320,70,70);
  rubber1 = new Rubber(300,300);

	ground = new Ground(600,height,1200,20);
    
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);

  hammer1.display(); 
  stone1.display();
  rubber1.display();
  ground.display();
 
  drawSprites();
 
}



