class Newton {
    constructor(pos, vel, acc, diam, clr) {
        this.position = pos;
        this.velocity = vel;
        this.acceleration = acc;
        this.diam = diam;
        this.clr = clr;
    }

    show() {
        fill(clr);
        circle(this.position.x, this.position.y, diam);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.position.x > width) { this.position.x = 0 };
        if (this.position.y > height) { this.position.y = 0 };
        if (this.velocity.y >= 10) { this.velocity.y = 10 };
    }
}