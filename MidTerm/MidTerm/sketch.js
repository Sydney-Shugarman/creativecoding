let confetti,
  moreconfetti,
  motion;

let themeCouleur = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722'
];
//font
let pablo;

var col= "#864319";
var leftEar;
var rightEar;
var mouth;
var whiteEyes;
var colorEyeys;
var x=215;
var speed =.25;
var chain;
var crown;
var isOverCircle;

//falling-confetti
class Particule {
  constructor(parent) {
    this.parent = parent;
    this.gravite = parent.gravite;
    this.reinit();
    this.forme = round(random(0, 1));
    this.etape = 0;
    this.prise = 0;
    this.priseFacteur = random(-0.02, 0.02);
    this.multFacteur = random(0.01, 0.08);
    this.priseAngle = 0;
    this.priseVitesse = 0.05;
  }
  reinit() {
    this.position = this.parent.position.copy();
    this.position.y = random(-20, -100);
    this.position.x = random(0, width);
    this.velocite = createVector(random(-6, 6), random(-10, 2));
    this.friction = random(0.995, 0.98);
    this.taille = round(random(5, 15));
    this.moitie = this.taille / 2;
    this.couleur = color(random(themeCouleur));
  }
  dessiner() {
    this.etape = 0.5 + Math.sin(this.velocite.y * 20) * 0.5;

    this.prise = this.priseFacteur + Math.cos(this.priseAngle) * this.multFacteur;
    this.priseAngle += this.priseVitesse;
    translate(this.position.x, this.position.y);
    rotate(this.velocite.x * 2);
    scale(1, this.etape);
    noStroke();
    fill(this.couleur);

    if (this.forme === 0) {
      rect(-this.moitie, -this.moitie, this.taille, this.taille);
    } else {
      ellipse(0, 0, this.taille, this.taille);
    }

    resetMatrix();
  }
  integration() {
    this.velocite.add(this.gravite);
    this.velocite.x += this.prise;
    this.velocite.mult(this.friction);
    this.position.add(this.velocite);
    if (this.position.y > height) {
      this.reinit();
    }

    if (this.position.x < 0) {
      this.reinit();
    }
    if (this.position.x > width + 10) {
      this.reinit();
    }
  }
  rendu() {
    this.integration();
    this.dessiner();

  }
}
class SystemeDeParticules {
  constructor(nombreMax, position, gravite) {
    this.position = position.copy();
    this.nombreMax = nombreMax;
    this.gravite = createVector(0, 0.1);
    this.friction = 0.98;
    // le tableau
    this.particules = [];
    for (var i = 0; i < this.nombreMax; i++) {
      this.particules.push(new Particule(this));
    }
  }
  rendu() {
    if (motion) {
      var force = p5.Vector.sub(confetti, moreconfetti);
      this.gravite.x = force.x / 20;
      this.gravite.y = force.y / 20;
    }

    this.particules.forEach(particules => particules.rendu());
  }
}
let confettis;

//images
function preload(){
leftEar =loadImage("images/left-ear.png");
rightEar =loadImage("images/right-ear.png");
mouth =loadImage("images/mouth.png");
colorEyeys =loadImage("images/color-eyes.png");
whiteEyes =loadImage("images/w-eyes.png");
crown = loadImage("images/crown-kanye.png");
chain = loadImage("images/chain.png");
pablo = loadFont('font/I_FEEL_LIKE_PABLO.ttf');

}
  function setup(){
    createCanvas(600,400);
    frameRate(20);
    textFont(pablo);
    moreconfetti = createVector(0, 0);
    confetti = createVector(0, 0);
    confettis = new SystemeDeParticules(500, createVector(width / 2, -20));
  }

  function draw(){

    //confetti(mouseX and Y)
    background(color("#111"));
    confetti.x = mouseX;
    confetti.y = mouseY;
    confettis.rendu();
    moreconfetti.x = confetti.x;
    moreconfetti.y = confetti.y;

    // get distance between mouse and circle
    var distance = dist(mouseX, mouseY, 200, 200);
    // if the distance is less than the circle's radius
if (mousePressed,mouseX <= 38 && mouseY >= 45)
   {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  // draw a circle
 stroke("#E87CB2");
 strokeWeight(2);
 if(isOverCircle == true)
 {
   image(crown,237,27,129,101);
   fill("#E61C77");
   cursor(HAND);
 } else {
   fill("#E87CB2");
   cursor(ARROW);
 }
 ellipse(38, 50, 38, 38);

// chain
 if (keyIsPressed === true) {
   image(chain,220,270,162,118);
 } else {
   fill(0);
    }

    fill('white');
    noStroke();
    textSize(40);
    text('PRESS A KEY', 195,370 );

//Bear
  //ears
  image(leftEar,150,102,80,80);
  image(rightEar,385,110,80,80);

  //head
  fill(col);
  noStroke();
  ellipse(300,210,256,234);

  //mouth
  image(mouth,234,228,130,102);

  //whiteEyes
  image(whiteEyes,200,150,200,100);

  //colorEyeys
  image(colorEyeys,x,160,170,76);

      if (x > 220){
        speed = -.25;
      } else if (x < 200) {
        speed = .25
      }
    x = x+speed;


}

function mousePressed() {
  next = 0;
  motion = true;
}

function mouseReleased() {
  motion = false;
  confettis.gravite.y = 0.1;
  confettis.gravite.x = 0;
}
