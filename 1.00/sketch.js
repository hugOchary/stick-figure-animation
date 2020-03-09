function setup() {  
    createCanvas(400, 400);
    body = new Body(new Point(200, 50), 50, Math.PI/2);
    body.growLeftArm(40, 0);
    body.growLeftArm(30, Math.PI/2);
    body.growRightArm(40, 0);
    body.growRightArm(30, -Math.PI/2);
    body.growLeftLeg(50, 0);
    body.growLeftLeg(50, Math.PI/2);
    body.growRightLeg(50, 0);
    body.growRightLeg(50, -Math.PI/2);
  }
  
  function draw() {
    background(220);
    body.draw()
  }