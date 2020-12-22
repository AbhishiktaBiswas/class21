var rect1, rect2;

function setup() {
  createCanvas(800, 600);

  rect1 = createSprite(400, 200, 120, 200);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect1.velocityX = -3;


  rect2 = createSprite(100, 200, 200, 120);
  rect2.shapeColor = "orange";
  rect2.debug = true;
  rect2.velocityX = 3;
}

function draw() {
  background(255);

  if (rect2.x - rect1.x < rect2.width / 2 + rect1.width / 2 &&
    rect1.x - rect2.x < rect2.width / 2 + rect1.width / 2 ){
   
        rect1.velocityX = rect1.velocityX*(-1);
        rect2.velocityX = rect2.velocityX*(-1);

  }

  drawSprites();
}