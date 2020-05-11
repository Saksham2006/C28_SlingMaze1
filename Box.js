class Box {
    constructor(x,y) {
        var options={
            restitution: 1.0
        }
      this.body = Bodies.rectangle(x,y,30,30,options);
      this.width = 30;
      this.height = 30;
      World.add(world, this.body);
    }
    display() {
      var angle = this.body.angle;
      var r = random(0,255);
      var g = random(0,255);
      var b = random(0,255);
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill(r,g,b);
      rectMode(CENTER);
      rect(0, 0, 30, 30);
      pop();
    }
}