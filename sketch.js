
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var trash1;


function setup() {
	createCanvas(1600, 1400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	trash1=new Trash(200,200,95,95);

	groundObject=new ground(width/2,height,width,20);
	dustbinObj=new dustbin(1200,1390);

	

	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(trash1.body,trash1.body.position,{x:250,y:-300})
	 trash1.isVisible=false;
	}
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  

  groundObject.display();
  dustbinObj.display();
 
 
 trash1.display();
 

  console.log(trash1.body.position.x,trash1.body.position.y)
  
  drawSprites();
}


