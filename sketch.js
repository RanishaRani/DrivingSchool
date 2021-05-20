var player1, player2,player3, player1image,player2image,player3image;

var trackimg, crosstrackimg, ttrackimg,ytrackimg;
var track;
var op1, op2, op3, op4, op5;

function preload(){
trackimg = loadImage("track.png");
player1image = loadImage("whitecar.png");
player2image = loadImage("redcar.png");
player3image = loadImage("yellowcar.png");


}



function setup() {
  createCanvas(displayWidth,displayHeight);
  track = createSprite(displayWidth/2,displayHeight/2, 2 * displayWidth , displayHeight);
  track.addImage(trackimg);
  track.scale = 1.45;

 player1 = createSprite(displayWidth/ 4 , displayHeight/2);
 player1.addImage(player1image)
 player1.scale = 0.04

 player2 = createSprite(displayWidth/ 2, displayHeight/2);
 player2.addImage(player2image)
 player2.scale = 0.04

 player3 = createSprite(displayWidth/ 2 + 350 , displayHeight/2);
 player3.addImage(player3image)
 player3.scale = 0.04
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (mousePressedOver(player1)){
    player2.destroy();
    player3.destroy();
    player1.x = width/2;
  }
  if (mousePressedOver(player2)){
    player1.destroy();
    player3.destroy();
    
  }
  if (mousePressedOver(player3)){
    player2.destroy();
    player1.destroy();
    player3.x = width/2;
  }

}