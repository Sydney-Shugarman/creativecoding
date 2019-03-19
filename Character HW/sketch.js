var col= "#E2A356"

function setup() {
createCanvas(600,400);
background("#9FADFF");
  }

  function draw() {

    // Arms
    fill("#E2A356");
    stroke("#AF6A19")
    strokeWeight(3);
    beginShape();
    curveVertex(229,  235);
    curveVertex(229,  235);
    curveVertex(200,  239);
    curveVertex(190,  219);
    curveVertex(229, 195);
    curveVertex(262, 213);
    curveVertex(262, 213);
    endShape();



    //
    fill("#E2A356");
    stroke("#AF6A19")
    strokeWeight(3);
    ellipse(268,330,50,80,381);

    //body
    fill("#E2A356");
    stroke("#AF6A19")
    strokeWeight(3);
    ellipse(305,250,150,185)



    //ears outline
    noFill();
    stroke("#AF6A19")
    strokeWeight(3);
    arc(219, 85, 73, 73, 90, PI + QUARTER_PI, OPEN);
    arc(410, 85, 73, 73, 90, PI + QUARTER_PI, OPEN);

    //head
    fill("#E2A356");
    strokeWeight(3);
    stroke("#AF6A19");
    ellipse(309,129,185,180);

    // mouth
    fill("#F4CDA6");
    noStroke();
    ellipse(306,181,54,41);
    noStroke();
    fill("#692E04");
    ellipse(308,175,15,9);

    //ears
    noStroke();
    fill("#E2A356");
    ellipse(219,85,70,71);
    fill("#AF6A19");
    noStroke();
    ellipse(220,85,35,35);

    fill("#E2A356");
    ellipse(410,85,70,71);
    fill("#AF6A19");
    noStroke();
    ellipse(410,85,35,35);

    //eyes
    fill("#FFFFFF");
    strokeWeight(2);
    ellipse(270,130,40,57);
    ellipse(343,130,40,57,180);

    fill("#0A92E5");
    stroke("#155677");

    ellipse(275,128,27,30);
    ellipse(338,128,27,30);

    // eyebrows
    noFill();
    stroke("#000000");
    strokeWeight(2);
beginShape();
curveVertex(246, 108);
curveVertex(246, 108);
curveVertex(255, 97);
curveVertex(272, 94);
curveVertex(272, 94);
endShape();

beginShape();
curveVertex(341, 94);
curveVertex(341, 94);
curveVertex(355, 97);
curveVertex(369, 111);
curveVertex(369, 111);
endShape();

//right leg
fill("#E2A356");
stroke("#AF6A19")
strokeWeight(3);
ellipse(330,335,50,75,34);

// right arm
stroke("#AF6A19")
strokeWeight(3);
noFill();
beginShape();
curveVertex(327,  225);
curveVertex(327,  225);
curveVertex(330,  280);
curveVertex(360,  280);
curveVertex(360,  213);
curveVertex(360,  213);
endShape();



}
