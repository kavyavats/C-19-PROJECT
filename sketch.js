var fixedRect, movingRect,rect1,rect2;

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

  rect1 = createSprite(200, 200, 40, 50);
  rect1.shapeColor="blue";

  rect2=createSprite(500,200,40,50);
  rect2.shapeColor="blue";



}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

  rect2.x=mouseX;
  rect2.y=mouseY;

 if(isTouching(rect2,rect1)){
   rect1.shapeColor="yellow";
   rect2.shapeColor="yellow";
 }

 else{
  rect1.shapeColor="blue";
  rect2.shapeColor="blue";
 }

  drawSprites();
}

