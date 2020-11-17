class Newton {
    constructor(pos, vel, acc, diam, clr, vLimit) {
        this.position = pos;
        this.velocity = vel;
        this.acceleration = acc;
        this.diam = diam;
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

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.velocity.mag() >= this.vLimit) { this.velocity.setMag(this.vLimit) };
        this.debugOutput();
    }

    edges(func) {
        if (func == null) {
            if (this.position.x > width) { this.position.x = 0 };
            if (this.position.y > height) { this.position.y = 0 };
            return;
        };
        func();
    }

    debugOutput() {
        textSize(18);
        text(`Velocity          ${this.velocity.x.toFixed(4)}  ${this.velocity.y.toFixed(8)}`, 20, 200);
        text(`Acceleration   ${this.acceleration.x.toFixed(4)}  ${this.acceleration.y.toFixed(8)}`, 20, 240);
    }
}