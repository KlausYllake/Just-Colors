var ball,balls;
var color1,color2,color3,color4,color5,color6;
var colors;
var spaceLimit = [20,380];

function setup() {
  createCanvas(windowWidth, windowHeight);

  color1 = createSprite(5,height/2,20,height);
  color2 = createSprite(width-5,height/2,20,height);
  color3 = createSprite(width/4,5,width/2,20);
  color4 = createSprite(width/4*3,5,width/2,20);
  color5 = createSprite(width/4,height-5,width/2,20);
  color6 = createSprite(width/4*3,height-5,width/2,20);
  colors = new Group();
  
  colorGroup(color1,"red");
  colorGroup(color2,"orange");
  colorGroup(color3,"yellow");
  colorGroup(color4,"green");
  colorGroup(color5,"blue");
  colorGroup(color6,"purple");

  balls = new Group();
}

function draw() {
  if (frameCount % 10 == 0) {
    spawn();
  }
  
  for (var i = 0; i < balls.length; i++) {
    if (balls.length > 0) {
      if (balls[i].x > width-10 || balls[i].x < 10) {
        balls[i].velocityX = balls[i].velocityX*-1;

      }
      if (balls[i].y > height-10 || balls[i].y < 10) {
        balls[i].velocityY = balls[i].velocityY*-1;
      }
    }

    for (var j = 0; j < colors.length; j++)
      if (colision(balls[i],colors[j])) {
        balls[i].visible = true;
        balls[i].shapeColor = colors[j].shapeColor;
      }
  }
  

  background(0);
  drawSprites();
}