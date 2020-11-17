// https://www.youtube.com/watch?v=Uibl0UE4VH8&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=17

let t, diam, clr;

function initialize() {
    initMyVariableNames();
    diam = 50;
    clr = clrAlmostRed;
}

function setup() {
    initialize();
    createCanvas(460, 400).position(20, 20);
    let p = createVector(50, height / 2);
    let v = createVector(1, 0);
    let a = createVector(0, .03);
    t = new Newton(p, v, a, diam, clr);
}

function draw() {
    background(clrAlmostBlack);
    t.show();
    t.update();
}