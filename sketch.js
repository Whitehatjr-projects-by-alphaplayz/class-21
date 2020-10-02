var fixedRect, movingRect;

var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ob1 = createSprite(300,50,20,20);
  ob2 = createSprite(300,400,20,20);

  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

  ob1.x = mouseX;
  ob1.y = mouseY;

if (isTouching(ob1,ob2)){
  ob1.shapeColor = "yellow";
  ob2.shapeColor = "yellow";
}
else {
  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
}
 bounceOff(movingRect,fixedRect);
  drawSprites();
}

