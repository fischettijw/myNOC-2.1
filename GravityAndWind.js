// https://www.youtube.com/watch?v=Uibl0UE4VH8&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=17

let t, diam, clr;

function initialize() {
    initMyVariableNames();
    diam = 10;
    clr = clrAlmostRed;
}

function setup() {
    initialize();
    createCanvas(460, 400).position(20, 20);
    let p = createVector(0, height / 2);
    let v = createVector(1, 3);
    let a = createVector(0, .01);
    t = new Newton(p, v, a, diam, clr, 5);
}

function draw() {
    background(clrAlmostBlack);
    t.show();
    t.edges();
    // t.edges(myEdges);
    t.update();
}

function myEdges() {
    if (t.position.x >= width) { t.velocity.x *= -1 }
    if (t.position.x < 0) { t.velocity.x *= -1 }
    if (t.position.y >= height) { t.velocity.y *= -1 }
    if (t.position.y < 0) { t.velocity.y *= -1 }
}