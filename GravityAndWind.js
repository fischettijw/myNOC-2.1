// https://www.youtube.com/watch?v=Uibl0UE4VH8&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=17

let t, diam, clr, mass, maxVel;

function initialize() {
    initMyVariableNames();
    diam = 10;
    clr = _clrAlmostRed;
    mass = 1;
    maxVel = 5;
}

function setup() {
    initialize();
    createCanvas(460, 400).position(20, 20);
    let p = createVector(50, height / 2);
    let v = createVector(1, 1);
    let a = createVector(0, 0.01);
    t = new Newton(p, v, a, diam, mass, clr, maxVel);

    let pp = createVector(width / 2, height / 2);
    let vv = createVector(-2, -2);
    let aa = createVector(0.01, 0);
    tt = new Newton(pp, vv, aa, diam * 2, mass, 'green', maxVel * 2);
}

function draw() {
    background(_clrAlmostBlack);
    t.show();
    t.edges(myEdges); // t.edges(myEdges);
    t.update(true);
    tt.show();
    tt.edges(myEdges); // t.edges(myEdges);
    tt.update();
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) { t.applyForce(createVector(0, .001)); }
    if (keyCode === UP_ARROW) { t.applyForce(createVector(0, -.001)); }
    if (keyCode === RIGHT_ARROW) { t.applyForce(createVector(.001, 0)); }
    if (keyCode === LEFT_ARROW) { t.applyForce(createVector(-.001, 0)); }
}

function myEdges(instance) {
    if (instance.position.x >= width) { instance.velocity.x *= -1 }
    if (instance.position.x < 0) { instance.velocity.x *= -1 }
    if (instance.position.y >= height) { instance.velocity.y *= -1 }
    if (instance.position.y < 0) { instance.velocity.y *= -1 }
}