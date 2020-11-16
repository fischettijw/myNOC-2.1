// https://www.youtube.com/watch?v=Uibl0UE4VH8&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=17

let t;

function setup() {
    initializeColorNames();
    createCanvas(460, 400).position(20, 20);
    let p = createVector(50, height / 2);
    let v = createVector(.2, 0);
    let a = createVector(0, .02);
    t = new Newton(p, v, a);
}

function draw() {
    background(clrAlmostBlack);
    t.show(50, 'red');
    t.update();
}