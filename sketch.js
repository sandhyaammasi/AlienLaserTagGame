var laser;
var droid, droidsGroup;
var score = 0
var edges;
var droid1;

var gameState = "PLAY";
var droidAnimation;
function preload(){
  droidAnimation = loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png");
 bg = loadImage("shivbg.jpg");
}

function setup() {
  createCanvas(800,400);
 laser =  createSprite(600, 300, 20, 100);
laser.shapeColor = "red"
  edges = createEdgeSprites();
  droidsGroup = createGroup();
  droid1 =createSprite(random(50,750),random(50,350),20,20);
  droid1.addAnimation("droid running",droidAnimation);
  droid1.scale = 0.1
  droid1.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
  droid1.velocityX = random(-10,10);
  droid1.velocityY = random(-10,10);
  

  droid2 =createSprite(random(50,750),random(50,350),20,20);
  droid2.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
  droid2.velocityX = random(-10,10);
  droid2.velocityY = random(-10,10);
  droid2.addAnimation("droid running",droidAnimation);
  droid2.scale = 0.1
  
 
 

  droid3 =createSprite(random(50,750),random(50,350),20,20);
  droid3.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
  droid3.velocityX = random(-10,10);
  droid3.velocityY = random(-10,10);
  droid3.addAnimation("droid running",droidAnimation);
  droid3.scale = 0.1

  droid4 =createSprite(random(50,750),random(50,350),20,20);
  droid4.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
  droid4.velocityX = random(-10,10);
  droid4.velocityY = random(-10,10);
  droid4.addAnimation("droid running",droidAnimation);
  droid4.scale = 0.1

  droid5 =createSprite(random(50,750),random(50,350),20,20);
  droid5.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
  droid5.velocityX = random(-10,10);
  droid5.velocityY = random(-10,10);
  droid5.addAnimation("droid running",droidAnimation);
  droid5.scale = 0.1

  droidsGroup.add(droid1);
  droidsGroup.add(droid2);
  droidsGroup.add(droid3);
  droidsGroup.add(droid4);
  droidsGroup.add(droid5);
}

function draw() {
  if(gameState=="PLAY"){
  //  millis() = 0;
  fill("white");
  textSize(20);
  background(bg); 
  text ("SCORE "+score , 50,50);
  if(keyDown("up")){
    laser.y = laser.y-10;
  }
  if(keyDown("down")){
    laser.y = laser.y+10;
  }
  if(keyDown("left")){
    laser.x = laser.x-10;
  }
  if(keyDown("right")){
    laser.x = laser.x+10;
  }
 // createDroids(); 
  laser.bounceOff(edges);
  droidsGroup.bounceOff(edges);
 // laser.x = mouseX;
  // laser.y = mouseY;
  if(laser.isTouching(droid1)){
    score = score + 1;
    droid1.lifetime=0
  }
  if(laser.isTouching(droid2)){
    score = score + 1;
    droid2.lifetime=0
  }
  if(laser.isTouching(droid3)){
    score = score + 1;
    droid3.lifetime=0
  }
  if(laser.isTouching(droid4)){
    score = score + 1;
    droid4.lifetime=0
  }
  if(laser.isTouching(droid5)){
    score = score + 1;
    droid5.lifetime=0
  }
  if(droid1.lifetime==0&&droid2.lifetime==0&&droid3.lifetime==0&&droid4.lifetime==0&&droid5.lifetime==0){
    droid1 =createSprite(random(50,750),random(50,350),20,20);
    droid1.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
    droid1.velocityX = random(-10,10);
    droid1.velocityY = random(-10,10);
    droid1.addAnimation("droid running",droidAnimation);
    droid1.scale = 0.1
   
    droid2 =createSprite(random(50,750),random(50,350),20,20);
    droid2.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
    droid2.velocityX = random(-10,10);
    droid2.velocityY = random(-10,10);
    droid2.addAnimation("droid running",droidAnimation);
    droid2.scale = 0.1
    
    droid3 =createSprite(random(50,750),random(50,350),20,20);
    droid3.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
    droid3.velocityX = random(-10,10);
    droid3.velocityY = random(-10,10);
    droid3.addAnimation("droid running",droidAnimation);
    droid3.scale = 0.1
    
  
  
  
    droid4 =createSprite(random(50,750),random(50,350),20,20);
    droid4.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
    droid4.velocityX = random(-10,10);
    droid4.velocityY = random(-10,10);
    droid4.addAnimation("droid running",droidAnimation);
    droid4.scale = 0.1
    
    droid5 =createSprite(random(50,750),random(50,350),20,20);
    droid5.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
    droid5.velocityX = random(-10,10);
    droid5.velocityY = random(-10,10);
    droid5.addAnimation("droid running",droidAnimation);
    droid5.scale = 0.1
  
    droidsGroup.add(droid1);
    droidsGroup.add(droid2);
    droidsGroup.add(droid3);
    droidsGroup.add(droid4);
    droidsGroup.add(droid5);
  }
  seconds = parseInt((millis())/1000);
  text("Time Left is 00 :",560,50);
  fill("blue");
    text(120-seconds,700,50);
    if (millis() >= 120 *1000) {

      gameState = "END";
    }
  drawSprites();
}
else if(gameState=="END"){
  background("red");
  textSize(25);
  fill ("black");
  text("GAME OVER",width/2-100,height/2);
  text("YOUR SCORE IS "+ score,width/2-150,height/2+100);
  restartbutton = createButton("restart").position(width/2,height-50);
  restartbutton.mousePressed(()=>{window.location.reload()});
}
}
function createDroids(){
  if(frameCount%20==0){

    droid =createSprite(random(50,750),random(50,350),20,20);
    droid.shapeColor = color(rgb(random(0,255),random(0,255),random(0,255)));
    droid.velocityX = random(-10,10);
    droid.velocityY = random(-10,10);
    droid.lifetime = 150;
   
    droidsGroup.add(droid);
  
   
  }
}