var fixedRect , movingRect;
var object1, object2;
var gameObject1,gameObject2;
var gameObject3,gameObject4;

function setup() 
{
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 80, 30);
  fixedRect.shapeColor = "green";
  gameObject1= createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  gameObject2= createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3= createSprite(300, 500, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4= createSprite(400, 500, 50, 50);
  gameObject4.shapeColor = "green";

  gameObject3.velocityX = 5;
  gameObject4.velocityX = -5;
}

function draw() 
{
  background(255,255,255);  
   movingRect.x = World.mouseX;
   movingRect.y = World.mouseY;
  
   if(isTouching(movingRect, gameObject1))
  {
    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  
  }
  else
  {
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(gameObject3, gameObject4);
  drawSprites();
}





