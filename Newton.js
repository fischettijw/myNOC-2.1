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
        fill(clr);
        circle(this.position.x, this.position.y, diam);
    }

    applyForce(force) {
        //  // let f = p5.Vector.div(force / this.mass);
        // let f = force;
        // f.div(this.mass);
        // this.acceleration.add(f);
        if (this.velocity.mag() > this.vLimit - .001) { this.acceleration = 0; }

        force.div(this.mass);
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.velocity.mag() >= this.vLimit) { this.velocity.setMag(this.vLimit) };
        this.debugOutput();
    }

    edges(func) {
        if (func == null) {
            if (this.position.x >= width) { this.position.x = 0 };
            if (this.position.x < 0) { this.position.x = width - 1 };
            if (this.position.y >= height) { this.position.y = 0 };
            if (this.position.y < 0) { this.position.y = height - 1 };
            return;
        };
        func();
    }

    debugOutput() {
        fill('yellow');
        textSize(18);
        text(`Velocity          ${this.velocity.x.toFixed(8)}  ${this.velocity.y.toFixed(8)}`, 20, 180);
        text(`Acceleration   ${this.acceleration.x.toFixed(8)}  ${this.acceleration.y.toFixed(8)}`, 20, 220);
        text(`Position          ${this.position.x.toFixed(8)}  ${this.position.y.toFixed(8)}`, 20, 260);
    }
}