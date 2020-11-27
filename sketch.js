var fixedRect, movingRect;
var box1, box2;
var temp, temp1;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(700, 200, 20, 380);
  fixedRect.shapeColor = 'blue';
  
  movingRect = createSprite(200, 200, 100, 40);
  movingRect.shapeColor = 'blue';

  box1 = createSprite(200,100,20,20);
  box1.shapeColor = 'yellow';
  box1.velocityX = 2;

  box2 = createSprite(200,200,20,20);
  box2.shapeColor = 'purple';
  box2.velocityX = 2;

}

function draw() {
  background('black');  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, fixedRect)){
    temp = fixedRect;
    temp1 = movingRect;
    temp.shapeColor = 'red';
    temp1.shapeColor = 'red';
  }

  else{
    temp = fixedRect;
    temp1 = movingRect;
    temp.shapeColor = 'blue';
    temp1.shapeColor = 'blue';
  }

  collide(box1, fixedRect);
  bounceOff(box2, fixedRect);

  //detecting collision with box1 and wall

  drawSprites();
}
