// the boat is shaky because it is broken hence the red light

var shipImg
var sea
var ship


function preload(){
  sea = loadImage("sea.png");
  shipImg = loadAnimation("ship-3.png","ship-4.png");
 
}


function setup(){
  createCanvas(800,500);
 
  ship = createSprite(100,320,20,50);
  ship.addAnimation("sailing", shipImg);
  ship.scale = 0.25;

}

function draw() {
  background(sea);
 
  drawSprites();

  ship.velocityX = 4

  if (ship.x > 870){
    ship.x = -70;
  }
}