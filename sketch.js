// declare variables
var ship, shipAnimation;
var sea, seaImg;

function preload(){
  // load ship floating animation and sea image
  shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  // create canvas
  createCanvas(400,400);

  // create sea sprite and add image
  sea = createSprite(200,200,400,400);
  sea.addImage(seaImg);
  sea.width = 400;
  sea.height = 400;
  sea.scale = 0.3;

  // create ship sprite, add floating animation and scale it
  ship = createSprite(100,200,100,100);
  ship.addAnimation("shipAnimation", shipAnimation);
  ship.scale = 0.2;
}

function draw() {
  // set background color
  background("blue");
  
  // move sea backwards
  sea.velocityX = -2;

  // reset sea from centre if it escapes canvas
  if (sea.x < 0) {
    sea.x = sea.width/2;
  }

  // draw sprites
  drawSprites();
}