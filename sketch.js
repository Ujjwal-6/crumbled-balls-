const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,dustbin1,paper1;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,390,1200,20);
    dustbin1=new Dustbin(1200,650);
    paper1 = new Paper(100,300,40);

    
    
}

function draw(){
    background("grey");
    Engine.update(engine);
    
    ground.display();
    dustbin1.display();
    paper1.display();
    

}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
    }
}
