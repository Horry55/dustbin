const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var engine,world,ground,ball;
function setup() {
  createCanvas(500,500);
   engine=Engine.create();
   world=engine.world
   var option={
     isStatic:true
   }
   ground=Bodies.rectangle(200,390,10000,20,option);
   ground2=Bodies.rectangle(250,340,20,80,option);
   ground3=Bodies.rectangle(350,340,20,80,option);
   ground4=Bodies.rectangle(300,370,80,20,option);
  
   World.add(world,ground);
   World.add(world,ground2);
   World.add(world,ground3);
   World.add(world,ground4);
   var bounce={
     restitution:0.8,
     density:0.5,
     friction:1

   }
   ball=Bodies.circle(100,370,20,bounce);
   World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,10000,20)
  rect(ground3.position.x,ground3.position.y,20,80)
  rect(ground4.position.x,ground4.position.y,80,20)
  rect(ground2.position.x,ground2.position.y,20,80)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-1000})
  }
  drawSprites();
}