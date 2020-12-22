var object1, object2,object3,object4,object5;

function setup() {
  createCanvas(800, 600);

  object1 = createSprite(200, 100, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;

  object2 = createSprite(600, 400, 80, 30);
  object2.shapeColor = "orange";
  object2.debug = true;

  object3 = createSprite(100,100,50,80);
  object3.shapeColor = "green";
  object3.debug = true;

  object4 = createSprite(300,100,50,80);
  object4.shapeColor = "green";
  object4.debug = true;

  object5 = createSprite(400,100,50,80);
  object5.shapeColor = "green";
  object5.debug = true;

}

function draw() {
  background(255);

  object2.x = mouseX;
  object2.y = mouseY;

  if(isTouching(object5,object2)){
    object2.shapeColor = "blue";
    object5.shapeColor = "black";
  }

  else {
    object2.shapeColor = "orange";
    object5.shapeColor = "green";

  }

  drawSprites();
}

