let tCut = 0;
let gGap = 0;
let tLeft;
let bPub = 0;
let oLvl = 0.00038;
let vJ = 0;
let italics, interMed, interBold;
let cpeach, cgreen, ccream, cpurple, colive, cred;

function preload() {
  italics = loadFont('SpaceMono-Italic.ttf');
  interMed = loadFont('SpaceMono-Regular.ttf');
  interBold = loadFont('SpaceMono-Bold.ttf');
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  frameRate(30); //to control timing
  cpeach = color('#ff9a76');
  cgreen = color('#637373');
  ccream = color('#ffeadb');
  cpurple = color('#5d54a4');
  colive = color('#e5df88');
  cred = color('#7d0633');
}

function draw() {
  noStroke();
  textAlign(CENTER);

  //Top Left
  fill(cpeach);
  rect(0, 0, 300, 200);
  fill(cred);
  covidCases(150, 100);
  textFont(italics);
  textSize(13);
  text("Novos casos COVID-19 (mundial)", 150, 200 - 10);

  //Top Right
  fill(cred);
  rect(300, 0, 300, 200);
  fill(cpeach);
  treeCut(450, 100);
  textFont(italics);
  textSize(12);
  text("Árvores cortadas (hectares)", 450, 200 - 10);

  //Mid Left
  fill(ccream);
  rect(0, 200, 300, 200);
  fill(cpurple);
  hoursLeft(150, 300);
  textFont(italics);
  textSize(12);
  text("Tempo de vida que me resta (hrs)", 150, 400 - 10);

  // Mid Right
  fill(cpurple);
  rect(300, 200, 300, 200);
  fill(ccream);
  oceanLevel(450, 300);
  textFont(italics);
  textSize(12);
  text("Aumento do nivel do mar (mm)", 450, 400 - 10);

  //Bottom Left
  fill(colive);
  rect(0, 400, 300, 200);
  fill(cgreen);
  voyagerJourney(150, 500);
  textFont(italics);
  textSize(12);
  text("Distancia percorrida pelo Voyager-1 (km)", 150, 600 - 10);

  //Bottom Right
  fill(cgreen);
  rect(300, 400, 300, 200);
  fill(colive);
  ptDebt(450, 500);
  textFont(italics);
  textSize(12);
  text("Nova divida Portuguesa (€)", 450, 600 - 10);


  //mouse
  blendMode(DIFFERENCE);
  fill(255);
  ellipse(mouseX, mouseY, 25, 25);
  blendMode(BLEND);
}


function covidCases(x, y) {
  //489,685 per day; 20403.54167 per hour:

  textFont(interBold);
  textSize(40);
  text(str(bPub), x, y);
  if (frameCount % (30 * 60) == 0) {
    bPub += 34.05;
  }
}

function treeCut(x, y) {
  // No. of trees being cut every second
  // 2.112 hectares
  textFont(interBold);
  textSize(40);
  text(str(round(tCut, 2)), x, y);
  if (frameCount % 30 == 0) {
    tCut += 2.112;
  }
}

function hoursLeft(x, y) {
  // No. of hours I have left
  // 481800 hours
  tLeft = 481800;
  textFont(interBold);
  textSize(40);
  text(str(tLeft), x, y);
  if (frameCount % (30 * 60 * 60) == 0) {
    tLeft -= 1;
  }
}


function oceanLevel(x, y) {
  // Rise in ocean levels: 3.4 millimeters per year
  // 3.4mm a year; 0.000388127 per hour
  textFont(interBold);
  textSize(40);
  text(str(round(oLvl, 5)), x, y);
  if (frameCount % (30 * 60 * 60) == 0) {
    oLvl += 0.000388127;
  }
}


function voyagerJourney(x, y) {
  // Voyager is 12m/s
  // 3.4mm a year; 0.000388127
  textFont(interBold);
  textSize(40);
  text(str(round(vJ, 2)), x, y);
  if (frameCount % (30) == 0) {
    vJ += 19.31;
  }
}

function ptDebt(x, y) {
  textFont(interBold);
  textSize(40);
  text(str(round(gGap, 2)), x, y);
  if (frameCount % 10 == 0) {
    gGap += 2.4;
  }
}
