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
}

function draw() {
    background(_clrAlmostBlack);
    t.show();
    t.edges(); // t.edges(myEdges);
    t.update();
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) { t.applyForce(createVector(0, .001)); }
    if (keyCode === UP_ARROW) { t.applyForce(createVector(0, -.001)); }
    if (keyCode === RIGHT_ARROW) { t.applyForce(createVector(.001, 0)); }
    if (keyCode === LEFT_ARROW) { t.applyForce(createVector(-.001, 0)); }
}

function myEdges() {
    if (t.position.x >= width) { t.velocity.x *= -1 }
    if (t.position.x < 0) { t.velocity.x *= -1 }
    if (t.position.y >= height) { t.velocity.y *= -1 }
    if (t.position.y < 0) { t.velocity.y *= -1 }
}