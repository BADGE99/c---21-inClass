const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball, ground;





function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var groundOptions = {
    isStatic : true  
  }
  ground = Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(world, ground);
  var ballOption = {
    restitution : 0.3
  }
  ball = Bodies.circle(200,200,20,ballOption);
  World.add(world, ball);
}

function draw() {
  background(100);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}