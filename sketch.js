const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground;
var box1,box2;
function setup() {
  createCanvas(400,400);
  

  //creating my engine
  myEngine = Engine.create();
  
  //creating my world. My world, is my engines world
  myWorld = myEngine.world;
  
  ground1 = new Ground(200,350,400,30)
  box1 = new Box(200,200,50,50)
  box2 = new Box(240,150,50,50)

}
function draw() {
  background("black"); 
  Engine.update(myEngine);
  ground1.display();
  box1.display();
  box2.display();
  drawSprites();
}