// https://www.youtube.com/watch?v=Uibl0UE4VH8&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=17
// Terminal Velocity       https://www.grc.nasa.gov/www/k-12/airplane/termv.html

let t, diam, clr, mass, maxVel;
let btnUp, btnDown, btnLeft, btnRight, btnGravity;
let accInput, grvInput;
let balls = [],
    numBalls;

function initialize() {
    initMyVariableNames();
    diam = 30;
    clr = _clrAlmostRed;
    mass = 1;
    maxVel = 5;
    numBalls = 5;
    createButtons();
}

function createButtons() {
    btnUp = createButton("UP").position(width + 20, 10).style(`width: 70px; height: 28px`).id('UP');
    document.getElementById('UP').onclick = function() { btnClicked('UP'); }

    btnDown = createButton("DOWN").position(width + 20, 40).style(`width: 70px; height: 28px`).id('DOWN');
    document.getElementById('DOWN').onclick = function() { btnClicked('DOWN'); }

    btnLeft = createButton("LEFT").position(width + 20, 70).style(`width: 70px; height: 28px`).id('LEFT');
    document.getElementById('LEFT').onclick = function() { btnClicked('LEFT'); }

    btnRight = createButton("RIGHT").position(width + 20, 100).style(`width: 70px; height: 28px`).id('RIGHT');
    document.getElementById('RIGHT').onclick = function() { btnClicked('RIGHT'); }

    accInput = createInput(0.0200).position(width + 20, 150).style(`width: 62px; height: 20px;font-size: 
                                                                    14px; text-align: center`);


    btnGravity = createButton("GRAVITY").position(width + 20, 250).style(`width: 70px; height: 28px`).id('GRAVITY');
    document.getElementById('GRAVITY').onclick = function() { btnClicked('GRAVITY'); }

    grvInput = createInput(0.0100).position(width + 20, 300).style(`width: 62px; height: 20px; font-size: 
                                                                    14px; text-align: center`);
}

function btnClicked(btn) {
    inpt = parseFloat(accInput.value());
    if (btn == 'UP') { t.applyForce(createVector(0, -inpt)); }
    if (btn == 'DOWN') { t.applyForce(createVector(0, inpt)); }
    if (btn == 'LEFT') { t.applyForce(createVector(-inpt, 0)); }
    if (btn == 'RIGHT') { t.applyForce(createVector(inpt, 0)); }
    inpt = parseFloat(grvInput.value());
    if (btn == 'GRAVITY') { alert(inpt); }
}

function setup() {
    createCanvas(400, 400).position(10, 10);
    initialize();
    let p = createVector(diam / 2, diam / 2);
    let v = createVector(2, 0);
    let a = createVector(0, 0.1635);

    // let a = createVector(0, 0.1635).mult(mass);
    // t = new Newton(p, v, a, diam, mass, clr, maxVel);

    for (i = 0; i < numBalls; i++) {
        balls[i] = new Newton(createVector(random(diam / 2, width - diam / 2), diam / 2),
            createVector(random(1, 3), 0),
            createVector(0, random(.1, .2)),
            random(10, 50), random(1, 5),
            color(random(255), random(255), random(255)), maxVel);
    }
}

function draw() {
    background(_clrAlmostBlack);
    // t.show();
    // t.edges();
    // t.update();
    for (i = 0; i < numBalls; i++) {
        balls[i].show();
        balls[i].edges();
        balls[i].update();
    }
}