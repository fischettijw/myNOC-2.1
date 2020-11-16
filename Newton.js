class Newton {
    constructor(p, v, a) {
        this.position = p;
        this.velocity = v;
        this.acceleration = a;
    }

    show(d, clr) {
        fill(clr);
        circle(this.position.x, this.position.y, d);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.position.x > width) { this.position.x = 0 };
        if (this.position.y > height) { this.position.y = 0 };
    }
}