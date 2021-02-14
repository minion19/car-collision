var wall, thickness;
var car, speed, weight;

function setup() {
  createCanvas(1600, 400);
  speed = random(55, 90)
  weight = random(400, 1500)


  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200,60, height / 2);
  wall.shapeColor = (80, 80, 80);

}

function draw() {
  background(255, 255, 255);

  if (hasCollided(car, wall)) {
    car.velocityX = 0;
    var damage = 0.5 * weight * speed * speed /22500;

    if (damage > 80 && damage < 180) {
      wall.shapeColor = color("yellow");
      car.shapeColor = color("yellow");
    }
    if (damage > 180) {
      wall.shapeColor = color("red");
      car.shapeColor = color("red");
    }

    if (damage < 80) {
      wall.shapeColor = color("green");
      car.shapeColor = color("green");
    }
  }
  drawSprites();
}

function hasCollided(a, b) {
  if (a.x + a.width>= b.x) {
    return true
  }
  return false;
}