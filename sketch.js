var bg,bgImg;
var player, shooterImg, shooter_shooting;
var z1, z1Img;
var w1, w1Img;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
 z1Img = loadAnimation("images/z0.png","images/z1.png","images/z2.png","images/z3.png","images/z4.png","images/z5.png","images/z6.png","images/z7.png")

 w1Img = loadAnimation("image/w0.png","image/w1.png","image/w2.png","image/w3.png","image/w4.png","image/w5.png","image/w6.png","image/w7.png")

}
function zombie(){
  if(frameCount % 300 === 0){
var ghost = createSprite(windowWidth - 100, windowHeight - 90, 20,20)
ghost.addAnimation("ghost",z1Img);
ghost.scale = 0.5;
ghost.velocityX = -2;
ghost.x = random(windowWidth/4, windowWidth);
ghost.y = random(windowHeight/4, windowHeight);
  }
}

function witch(){
  if(frameCount % 300 === 0){
    var witch = createSprite(windowWidth - 100, windowHeight - 100, 20,20)
    witch.addAnimation("witch",w1Img);
    witch.scale = 0.6;
    witch.velocityX = -3;
    witch.x = random(windowWidth/4, windowWidth);
    witch.y = random(windowHeight/4, windowHeight);
      }

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 

  



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
zombie();
witch();

drawSprites();

}
