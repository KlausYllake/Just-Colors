function spawn() {
    ball = createSprite(random(50,width-50),random(50,height-50),20,20);
    ball.visible = false;
    if (ball.x > width/2) {
    ball.velocityX = Math.round(random(5,10));
    ball.velocityY = Math.round(random(5,10));
    }
    else {
      ball.velocityX = Math.round(random(-10,-5));
      ball.velocityY = Math.round(random(-10,-5));
    }
    ball.lifetime = 1000;
  
    balls.add(ball);
  }

function colorGroup(obj,objColor) {
    obj.shapeColor = objColor;
    colors.add(obj);
}

function colision(obj1,obj2) {
    if (obj1.x - obj2.x <= obj1.width/2 + obj2.width/2 &&
        obj2.x - obj1.x <= obj1.width/2 + obj2.width/2 &&
        obj1.y - obj2.y <= obj1.height/2 + obj2.height/2 &&
        obj2.y - obj1.y <= obj1.height/2 + obj2.height/2) {
        return true;
    }
    else {
        return false;
    }
}