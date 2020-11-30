class Newton {
    static wallDampeningX = 0.95;
    static wallDampeningY = 0.8;
    static frictionDecay = 0.99;
    static frictionStop = 0.3;
    static numNewtons = 0;

    constructor(pos, vel, acc, diam, mass, clr) {
        this.position = pos;
        this.velocity = vel;
        this.acceleration = acc;
        this.diam = diam;
        this.mass = mass;
        this.clr = clr;
        Newton.numNewtons += 1;
    }

    show() {
        fill(this.clr);
        circle(this.position.x, this.position.y, this.diam);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update(db) {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.position.y > height - this.diam / 2 && this.velocity.y < this.mass / 10) {
            this.velocity.y = 0;
            this.acceleration.y = 0;
        }
        if (this.velocity.y == 0 && this.acceleration.y == 0) {
            this.velocity.x *= Newton.frictionDecay;
            if (abs(this.velocity.x) < Newton.frictionStop) { this.velocity.x = 0; }
        }
        this.debugOutput();
    }

    edges() {
        if (this.position.x + (this.diam / 2) >= width) {
            this.position.x = width - (this.diam / 2);
            this.velocity.x *= -Newton.wallDampeningX;
        }
        if (this.position.x - (this.diam / 2) < 0) {
            this.position.x = this.diam / 2;
            this.velocity.x *= -Newton.wallDampeningX;
        }
        if (this.position.y + (this.diam / 2) > height) {
            this.position.y = height - (this.diam / 2);
            this.velocity.y *= -Newton.wallDampeningY;
        }
    }

    debugOutput() {
        fill('yellow');
        textSize(18);
        text(`Velocity          ${this.velocity.x.toFixed(4)}  ${this.velocity.y.toFixed(14)}`, 20, 180);
        text(`Acceleration      ${this.acceleration.x.toFixed(4)}  ${this.acceleration.y.toFixed(8)}`, 20, 220);
        text(`Position          ${this.position.x.toFixed(4)}  ${this.position.y.toFixed(8)}`, 20, 260);
        text(`Mass              ${this.mass.toFixed(4)}`, 20, 300);
    }
}