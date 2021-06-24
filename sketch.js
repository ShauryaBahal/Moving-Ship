var ship, ship_moving, edges;
var seaImage;
var sea;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaImage = loadImage("sea.png ")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(0,200,400,400);
  sea.velocityX = 3
  sea.addImage("moving",seaImage);

  sea.scale = 0.3

  ship = createSprite(200,200,50,50);
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites(); 

  ship.scale = 0.3
}

function draw() {
  background("cyan");
  drawSprites();
  if(sea.x>300){
    sea.x = 0
  }
  console.log(sea.x)
}