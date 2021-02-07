const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint
 
var ball
var pin
var pin2
var pin3
var pin4
var pin5
var pin6
var pin7
var pin8
var pin9
var pin10

var sling

var gameState = "onSling"


function setup() {
  createCanvas(1440,725);
  
 engine = Engine.create();
	world = engine.world;
  ball = new Ball(300,360,25)
  pin = new Pins(950,330,20,20)
  pin2 = new Pins(980,300,20,20)
  pin3 = new Pins(980,360,20,20)
  pin4 = new Pins(980,330,20,20)
  pin5 = new Pins(1010,330,20,20)
  pin6 = new Pins(1010,300,20,20)
  pin7 = new Pins(1010,360,20,20)
  pin8 = new Pins(1010,390,20,20)
  pin9 = new Pins(1010,270,20,20)
  sling = new SlingShot(ball.body,{x:300,y:330})


 
}

function draw() {
  background("lightgrey");
  ball.display()
  sling.display()
  pin.display()
  pin2.display()
  pin3.display()
  pin4.display()
  pin5.display()
  pin6.display()
  pin7.display()
  pin8.display()
  pin9.display()
  






}


function mouseDragged(){      
	if(gameState === "onSling"){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
	}
	
	
	function mouseReleased(){
  sling.fly()
  gameState = "launch"
  }
  

  function keyPressed(){
		if (keyCode === 32){
			Matter.Body.setPosition(ball.body, {x:300, y:330})
      sling.attach(ball.body)
      gameState = "onSling"
		}
	}


