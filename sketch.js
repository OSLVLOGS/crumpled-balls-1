
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, Ball1, container1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(500, 600, 1000, 20);
	

	//Create the Bodies Here.
	Ball1 = new Ball(200, 200, 40, 40);
	
	leftbox = new Container(750, 555, 10, 70);
	rightBox = new Container(860, 555, 10, 70);
	bottombox = new Container(805, 585, 100, 10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Ball1.display();
  ground1.display();
  keyPressed();
  leftbox.display();
  rightBox.display();
  bottombox.display();

  
  drawSprites();
 
}

function keyPressed(){

if (keyCode==UP_ARROW){

	 Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x:85, y:-30});
	

}

}



