
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  wall=Bodies.rectangle(200,200,50,50)
  
  World.add(world,wall)
  console.log(wall)

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  // ball.position.x=mouseX
//ball.position.y=mouseY
  fill("white")
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  fill("yellow")
  rect(wall.position.X,wall.position.y,50,50)
 
}

