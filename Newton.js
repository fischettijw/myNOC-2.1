class Newton {
    constructor(pos, vel, acc, diam, mass, clr, vLimit) {
        this.position = pos;
        this.velocity = vel;
        this.acceleration = acc;
        this.diam = diam;
        this.mass = mass;
        this.clr = clr;
        if (vLimit == null) {
            this.vLimit = Number.MAX_VALUE; // 1.7976931348623157e+308
        } else {
            this.vLimit = vLimit;
        }
    }

    show() {
        fill(this.clr);
        circle(this.position.x, this.position.y, this.diam);
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update(db) {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.velocity.mag() >= this.vLimit) { this.velocity.setMag(this.vLimit) };
        this.debugOutput();
    }

    edges() {
        if (this.position.x + (this.diam / 2) >= width) {
            this.position.x = width - (this.diam / 2);
            this.velocity.x *= -1;
        }
        if (this.position.x - (this.diam / 2) < 0) {
            this.position.x = this.diam / 2;
            this.velocity.x *= -1;
        }
        if (this.position.y + (this.diam / 2) > height) {
            this.position.y = height - (this.diam / 2);
            this.velocity.y *= -1;
        }
    }

    debugOutput() {
        fill('yellow');
        textSize(18);
        text(`Velocity          ${this.velocity.x.toFixed(4)}  ${this.velocity.y.toFixed(8)}`, 20, 180);
        text(`Acceleration      ${this.acceleration.x.toFixed(4)}  ${this.acceleration.y.toFixed(8)}`, 20, 220);
        text(`Position          ${this.position.x.toFixed(4)}  ${this.position.y.toFixed(8)}`, 20, 260);
    }
}