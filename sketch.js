
var Engine = Matter.Engine;
World = Matter.World;
Events = Matter.Events
Bodies = Matter.Bodies;
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState="play",points=0;
var bgimg;
function preload(){
  bgimg=loadImage("bg1.jpg")
}
function setup() {
 createCanvas(1200, 800);
 engine = Engine.create();
 world = engine.world;
 ground = new Ground(width/2,height,width,20);
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
   for (var j = 75; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,75));
   }
   for (var j = 50; j <=width-10; j=j+50) 
   {
      plinkos.push(new Plinko(j,175));
   }
    for (var j = 75; j <=width; j=j+50) 
   {
      plinkos.push(new Plinko(j,275));
   }
    for (var j = 50; j <=width-10; j=j+50) 
   {
      plinkos.push(new Plinko(j,375));
   }
}
function draw() {
 background(bgimg);
 
 Engine.update(engine);
fill("WHITE")
textSize(50)

 text("PLINKO GAME 2",400,50)
 line(500,500,1200,10)
 textSize(20)
 fill("pink")
 text("score:"+score,10,40);
 text(" 500 ", 20, 550);
 text(" 500 ", 100, 550);
 text(" 500 ", 180, 550);
 text(" 500 ", 260, 550);
 text(" 100 ", 340, 550);
 text(" 100 ", 420, 550);
 text(" 100 ", 500, 550);
 text(" 200 ", 580, 550);
 text(" 200 ", 660, 550);
 text(" 200 ", 740, 550);
 text(" 200 ", 820, 550);
 text(" 200 ", 900, 550);
 text(" 200 ", 980, 550);
 text(" 200 ", 1060, 550);
 text(" 200 ", 1150, 550);
 
 if(gameState=="end"){
    fill("pink")
   textSize(100);
   text("GAME OVER!",200,270);
 }
 ground.display();

  for (var i = 0; i < plinkos.length; i++) {  
    plinkos[i].display();  
  }
  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>760)
      {
            if (particle.body.position.x < 300) 
            {
                score=score+500;      
                particle=null;
                if ( points>= 5) gameState ="end";                          
            }
            else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
            {
                  score = score + 100;
                  particle=null;
                  if ( points>= 5) gameState ="end";

            }
            else if (particle.body.position.x <1200 && particle.body.position.x > 601 )
            {
                  score = score + 200;
                  particle=null;
                  if ( points>= 5)  gameState ="end";

            }    
           
 

 
 
 
}


  }
  for (var i = 0; i < divisions.length; i++) {  
   divisions[i].display();  
 }
 }
 function mousePressed()
{
 if(gameState!=="end")
 {
     points++;
    particle=new Particle(mouseX, 10, 15, 10); 
 }   
}

