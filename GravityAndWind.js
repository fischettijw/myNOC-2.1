// https://www.youtube.com/watch?v=Uibl0UE4VH8&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=17
// Terminal Velocity       https://www.grc.nasa.gov/www/k-12/airplane/termv.html

let t, diam, clr, mass, maxVel;
let btnUp, btnDown, btnLeft, btnRight;

function initialize() {
    initMyVariableNames();
    diam = 30;
    clr = _clrAlmostRed;
    mass = 1;
    maxVel = 5;
    createButtons();
}

function createButtons() {
    btnUp = createButton("UP").position(width + 20, 10).style(`width: 60px; height: 28px`).id('UP');
    document.getElementById('UP').onclick = function() { btnClicked('UP'); }
    btnUp = createButton("DOWN").position(width + 20, 40).style(`width: 60px; height: 28px`).id('DOWN');
    document.getElementById('DOWN').onclick = function() { btnClicked('DOWN'); }
    btnUp = createButton("LEFT").position(width + 20, 70).style(`width: 60px; height: 28px`).id('LEFT');
    document.getElementById('LEFT').onclick = function() { btnClicked('LEFT'); }
    btnUp = createButton("RIGHT").position(width + 20, 100).style(`width: 60px; height: 28px`).id('RIGHT')
    document.getElementById('RIGHT').onclick = function() { btnClicked('RIGHT'); }
}

function btnClicked(btn) {
    if (btn == 'UP') { t.applyForce(createVector(0, -.001)); }
    if (btn == 'DOWN') { t.applyForce(createVector(0, .001)); }
    if (btn == 'LEFT') { t.applyForce(createVector(-.001, 0)); }
    if (btn == 'RIGHT') { t.applyForce(createVector(.001, 0)); }
}

function setup() {
    createCanvas(400, 400).position(10, 10);
    initialize();
    let p = createVector(diam / 2, diam / 2);
    let v = createVector(2, 0);
    let a = createVector(0, 0.1);
    t = new Newton(p, v, a, diam, mass, clr, maxVel);
}

function draw() {
    background(_clrAlmostBlack);
    t.show();
    t.edges();
    t.update();
}