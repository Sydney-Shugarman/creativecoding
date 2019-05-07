"use strict";
var scr = {
  w: innerWidth,
  h: innerHeight
};

var pig = {
  x: scr.w / 2,
  y: scr.h / 2,
  speed: 2,
  face: 30,
  left: 1,
  down: 1
};
var missPiggy = {
  x: scr.w,
  y: scr.h / 2,
  face: 30
};
class Block {
  constructor(_x, _y, _w, _c) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.color = _c;
  }
  show() {
	stroke(100);
	fill(this.color);
	rect(this.x, this.y, this.w, this.w);
  }
}
var frame = 20;
var backG = {
  r: 140,
  g: 0,
  b: 90,
  alpha: 100
};
var blocks = [];
var edge;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  backG.r = map(pig.y, 0, scr.h, 0, 255);
  backG.b = map(pig.x, 0, scr.w, 0, 255);
  backG.g = map(missPiggy.y, 0, scr.h, 0, 255);
  backG.alpha = map(missPiggy.x, 0, scr.w, 0, 100);
  background(backG.r, backG.g, backG.b);
  let s =
	"Drag to move miss Piggy. Click to place obstacles within the frame for mister Pig.";
  fill(190);
  stroke(0);
  textSize(16);
  text(s, frame, 0, scr.w - frame, 3 * frame);
  // draw a frame where the action is executed
  stroke(0);
  noFill();
  beginShape();
  vertex(frame, frame);
  vertex(scr.w - frame, frame);
  vertex(scr.w - frame, scr.h - frame);
  vertex(frame, scr.h - frame);
  endShape(CLOSE);
  // end frame

  // pig drawing
  // black outline and pink fill for the face, ears and nose
  stroke(0);
  strokeWeight(1);
  fill(255, 182, 193);
  // ears
  ellipse(pig.x - 25, pig.y - 25, 50, 15);
  ellipse(pig.x + 25, pig.y - 25, 50, 15);
  // face
  circle(pig.x, pig.y, pig.face * 2);
  // nose
  circle(pig.x, pig.y, 20);
  // nose holes are a darker pink, without outline
  fill(255, 20, 147);
  noStroke();
  circle(pig.x - 3, pig.y - 2, 3);
  circle(pig.x + 3, pig.y - 2, 2);
  // little black eyes
  fill(0);
  stroke(0);
  circle(pig.x - 5, pig.y - 15, 2);
  circle(pig.x + 5, pig.y - 15, 2);
  // wide mouth and lighter mouth ends
  noFill();
  strokeWeight(2);
  arc(pig.x, pig.y + 10, 35, 30, 0, PI, OPEN);
  strokeWeight(1);
  arc(pig.x + 18, pig.y + 7, 5, 5, PI * 0.2, PI, OPEN);
  arc(pig.x - 18, pig.y + 7, 5, 5, TWO_PI, PI * 0.8, OPEN);
  // 2 triangles and 1 circle to make a red bowtie
  fill(255, 0, 0);
  triangle(pig.x - 20, pig.y + 45, pig.x - 20, pig.y + 25, pig.x, pig.y + 35);
  triangle(pig.x, pig.y + 35, pig.x + 20, pig.y + 45, pig.x + 20, pig.y + 25);
  circle(pig.x, pig.y + 35, 8);

  // miss piggy drawing
  // black outline and pink fill for the face, ears and nose
  missPiggy.x = mouseX;
  missPiggy.y = mouseY;
  stroke(0);
  strokeWeight(1);
  fill(255, 182, 193);
  // ears
  // drawing miss Piggy
  ellipse(missPiggy.x - 25, missPiggy.y - 25, 50, 15);
  ellipse(missPiggy.x + 25, missPiggy.y - 25, 50, 15);
  // face
  circle(missPiggy.x, missPiggy.y, missPiggy.face * 2);
  // nose
  circle(missPiggy.x, missPiggy.y, 20);
  // nose holes are a darker pink, without outline
  fill(255, 20, 147);
  noStroke();
  circle(missPiggy.x - 3, missPiggy.y - 2, 3);
  circle(missPiggy.x + 3, missPiggy.y - 2, 2);
  // little black eyes
  fill(0);
  stroke(0);
  circle(missPiggy.x - 5, missPiggy.y - 15, 2);
  circle(missPiggy.x + 5, missPiggy.y - 15, 2);
  // wide mouth and lighter mouth ends
  noFill();
  strokeWeight(2);
  arc(missPiggy.x, missPiggy.y + 10, 35, 30, 0, PI, OPEN);
  strokeWeight(1);
  arc(missPiggy.x + 18, missPiggy.y + 7, 5, 5, PI * 0.2, PI, OPEN);
  arc(missPiggy.x - 18, missPiggy.y + 7, 5, 5, TWO_PI, PI * 0.8, OPEN);

  // 2 triangles and 1 circle to make a red bowtie
  fill(255, 0, 0);
  triangle(missPiggy.x - 30, missPiggy.y - 15, missPiggy.x - 30,
	missPiggy.y - 35, missPiggy.x - 10, missPiggy.y - 25);
  triangle(missPiggy.x - 10, missPiggy.y - 25, missPiggy.x + 10,
	missPiggy.y - 15, missPiggy.x + 10, missPiggy.y - 35);
  circle(missPiggy.x - 10, missPiggy.y - 25, 8);

  // draw blocks
  blocks.forEach(function(block) {
	block.show();
  });

  // check for walls and blocks
  checkCollisionFrame();
  checkCollisionPig(blocks, pig);
}

function mousePressed() {
  if (missPiggy.x > frame + 15 &&
	missPiggy.x < scr.w - frame - 15 &&
	missPiggy.y > frame + 15 &&
	missPiggy.y < scr.h - frame - 15) {
	blocks.push(new Block(missPiggy.x, missPiggy.y, 30, "rgb(255,50,250)"));
  }
  return false;
}

function checkCollisionPig(blocks, pig) {
  for (let i = 0; i < blocks.length; i++) {
	if (collision(blocks[i].x, blocks[i].y, blocks[i].w, blocks[i].w, pig.x, pig.y, pig.face)) {
	  switch (edge) {
		case "left":
		  pig.left -= 1;
		  break;
		case "right":
		  pig.left += 1;
		  break;
		case "top":
		  pig.down -= 1;
		  break;
		case "bottom":
		  pig.down += 1;
		  break;
	  }
	  blocks.splice(i, 1);
	}
  }
}
function collision(x0, y0, w0, h0, cx, cy, r) {
  var testX = cx;
  var testY = cy;
  if (testX < x0) {
	testX = x0;
	edge = "left";
  }
  if (testX > x0 + w0) {
	testX = x0 + w0;
	edge = "right";
  }
  if (testY < y0) {
	testY = y0;
	edge = "top";
  }
  if (testY > y0 + w0) {
	testY = y0 + h0;
	edge = "bottom";
  }
  return (cx - testX) * (cx - testX) + (cy - testY) * (cy - testY) < r * r;
}

function checkCollisionFrame() {
  // move right to right wall
  if (pig.x < scr.w - (frame + pig.face) && pig.left >= 1) {
	pig.x += pig.speed;
  } else {
	// turn X direction
	if (pig.x >= scr.w - (frame + pig.face)) {
	  pig.left -= 1;
	}
  }
  // move left to left wall
  if (pig.x > frame + pig.face && pig.left <= 0) {
	pig.x -= pig.speed;
  } else {
	// turn X direction
	if (pig.x <= frame + pig.face) {
	  pig.left += 1;
	}
  }
  // move down to lower wall
  if (pig.y < scr.h - (frame + pig.face) && pig.down >= 1) {
	pig.y += pig.speed;
  } else {
	// turn Y direction
	if (pig.y >= scr.h - (frame + pig.face)) {
	  pig.down -= 1;
	}
  }
  // move up to upper wall
  if (pig.y > frame + pig.face && pig.down <= 0) {
	pig.y -= pig.speed;
  } else {
	// turn Y direction
	if (pig.y <= frame + pig.face) {
	  pig.down += 1;
	}
  }
}
//  uses whole window size, even after resize
function windowResized() {
  resizeCanvas(scr.w, scr.h);
}
