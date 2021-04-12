 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particle = [];



function setup() {
  createCanvas(1500, 740);
  engine = Engine.create();
  world = engine.world;

    

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
 
  
  
     
   
   if(frameCount%1===0){
     particle.push(new Particle(random(width/200-1, width/1+1),3,3));
     
   }
 
  for (var j = 0; j < particle.length; j++) {
   
     particle [j].display();
   }
   
   drawSprites();
   
}