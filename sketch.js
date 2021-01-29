
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, lightsaber,ground, rope;
var ken1,ken2,ken3,ken4,ken5,ken6,ken7,ken8,ken9,ken10,ken11,ken12;
var world,maul;
var launchingForce=100;

function preload(){
	maul=loadImage("maul.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	lightsaber = new Lightsaber(235,420,30); 

	ken1=new Kenobi(1100,100,30);
	ken2=new Kenobi(1170,130,30);
	ken3=new Kenobi(1010,140,30);
	ken4=new Kenobi(1000,70,30);
	ken5=new Kenobi(1100,70,30);
	ken6=new Kenobi(1000,230,30);
	ken7=new Kenobi(900,230,40);
	ken8=new Kenobi(1140,150,40);
	ken9=new Kenobi(1100,230,40);
	ken10=new Kenobi(1200,200,40);
	ken11=new Kenobi(1120,50,40);
	ken12=new Kenobi(900,160,40);

	tree=new Tree(1050,580,450,600);
	ground=new Ground(700,600,2300,20);
	rope=new Rope(lightsaber.body,{x:235,y:420})
  
	
	Engine.run(engine);
 
}

function draw() {

  background(230);
  
  Engine.update(engine)
  textSize(25);
  text("Press Space to get revenge!!",50 ,50);
  image(maul ,200,340,200,300);
  
  

  tree.display();
  lightsaber.display();
  ken1.display();
  ken2.display();
  ken3.display();
  ken4.display();
  ken5.display();
  ken6.display();
  ken7.display();
  ken8.display();
  ken9.display();
  ken10.display();
  ken11.display();
  ken12.display();

  tree.display();
  ground.display();
  rope.display();
  detectollision(lightsaber,ken1);
  detectollision(lightsaber,ken2);
  detectollision(lightsaber,ken3);
  detectollision(lightsaber,ken4);
  detectollision(lightsaber,ken5);
  detectollision(lightsaber,ken6);
  detectollision(lightsaber,ken7);
  detectollision(lightsaber,ken8);
  detectollision(lightsaber,ken9);
  detectollision(lightsaber,ken10);
  detectollision(lightsaber,ken11);
  detectollision(lightsaber,ken12);
}

function mouseDragged()
{
	Matter.Body.setPosition(lightsaber.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	rope.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(lightsaber.body, {x:235, y:420}) 
	  rope.attach(lightsaber.body);
	}
  }

  function detectollision(thesaber,thekenobi){
	
  kenBodyPosition=thekenobi.body.position
  saberBodyPosition=thesaber.body.position
  
  var distance=dist(saberBodyPosition.x, saberBodyPosition.y, kenBodyPosition.x, kenBodyPosition.y)
  
  	if(distance<=thekenobi.r+thesaber.r)
    {
  	  Matter.Body.setStatic(thekenobi.body,false);
    }

  }



