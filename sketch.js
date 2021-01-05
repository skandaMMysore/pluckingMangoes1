const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){

  boyImage = loadImage("boy.png");
  stoneImage = loadImage("stone.png");
}

function setup() {
	var canvas = createCanvas(1500,700);
    
	

	engine = Engine.create();
	world = engine.world;
   
	tree = new Tree(800,600);
	tree.scale = 0.08;
	ground = new Ground(200,680,500,10);
	
	boy = createSprite(100,620);
	boy.addImage(boyImage);
	boy.scale = 0.08;

	mango = new Mango(600,200,280,120);
	mango.scale = 0.1;
	mango1 = new Mango(720,280,280,120);
	mango1.scale = 0.1;
	mango2 = new Mango(800,320,280,120);
	mango3 = new Mango(850,150,280,120);
	stone1 = new Stone(200,100,120);

	joint =	new Sling1(stone1.body,{x:100,y:120});
    
	
	
	
	

	

    
	Engine.run(engine);
	
  
}


function draw() {
	
	background(0);
    rectMode(CENTER);
	
	

	tree.display();
	ground.display();
	stone1.display();
	
	boy.display();
	mango.display();
	mango1.display();
	mango2.display();
	mango3.display();
	joint.display();
	
	detectCollision(stone1,mango);
	detectCollision(stone1,mango1);
	detectCollision(stone1,mango2);
	detectCollision(stone1,mango3);

	
	drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:MouseX,y:MouseY});
}
function mouseReleased(){
	joint.fly();
}
function detectCollision(LStone,LMango){
	mangoBodyPosition= lMango.body.position
	stoneBodyPosition = lStone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
                                                                                                       
	if(distance<=lMango.r+lStone.r){
      Matter.Body.setStatic(lMango.body,false);
	}	
	
}	


  



