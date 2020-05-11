class Slingshot {
    constructor(x, y, body) {
      const options = {
        pointA: {
          x: x,
          y: y
        },
        bodyB: body,
        stiffness: 0.02,
        length: 40
      };
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }
  
    fly() {
      this.sling.bodyB = null;
    }

    attach(body) {
        this.sling.bodyB = body;
      }
  
    display() {
      if (this.sling.bodyB) {
        var posA = this.sling.pointA;
        var posB = this.sling.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
      }
    }
  }