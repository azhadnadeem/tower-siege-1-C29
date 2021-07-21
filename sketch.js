const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var engine,world;
var block1,block2;
var polygon;

function preload(){

}

function setup(){
    createCanvas(1200,550);
    engine=Engine.create();
    world=engine.world;
block1=new Block(1100,100,30,40)
block2=new Block(1070,100,30,40)
block3=new Block(1040,100,30,40)
block4=new Block(1010,100,30,40)
block5=new Block(980,100,30,40)
block6=new Block(1070,130,30,40)
block7=new Block(1040,130,30,40)
block8=new Block(1010,130,30,40)
block9=new Block(1040,160,30,40)

block11=new Block(770,300,30,40)
block12=new Block(740,300,30,40)
block13=new Block(710,300,30,40)
block14=new Block(680,300,30,40)
block15=new Block(650,300,30,40)
block16=new Block(620,300,30,40)
block17=new Block(590,300,30,40)

block18=new Block(740,330,30,40)
block19=new Block(710,330,30,40)
block20=new Block(680,330,30,40)
block21=new Block(650,330,30,40)
block22=new Block(620,330,30,40)

block23=new Block(710,360,30,40)
block24=new Block(680,360,30,40)
block25=new Block(650,360,30,40)

block26=new Block(680,390,30,40)




ground1=new Ground(1040,200,180,10)

ground2=new Ground(680,400,230,10)

polygon=new Polygon(300,200)

slingshot=new Slingshot(polygon.body,{x:300,y:200})

    Engine.run(engine);

}



function draw(){
    background("black");
    Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();

  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  block23.display();
  block24.display();
  block25.display();

  block26.display();

  polygon.display();

 

  ground1.display();
  ground2.display();
  slingshot.display();
}



function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

//function mouseReleased(){
    //slingshot.fly();
//}

