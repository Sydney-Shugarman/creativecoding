var storybookArray = [];

var storyText = ["There was once a dinosaur.", "He was dancing.", "And a meteor passed, so fast!", "But it did not hit!"];

var page0,page1,page2;

var currentPage = 0;

function preload(){
  storybookArray[0] = image0 = loadImage("assets/story-1.png");
  storybookArray[1] = image1 = loadImage("assets/story-2.png");
  storybookArray[2] = image2 = loadImage("assets/story-3.png");

}

function setup() {
  // put setup code here
  createCanvas(500,500);

  page0 = createButton("Page 0");
  page0.position(10,400);
  page0.mousePressed(function(){
    currentPage = 0;
  });
  page1 = createButton("Page 1");
  page1.position(100,400);
  page1.mousePressed(function(){
    currentPage = 1;
  });
  page2 = createButton("Page 2");
  page2.position(200,400);
  page2.mousePressed(function(){
    currentPage = 2;
  });

}

function draw() {
  // put drawing code here
  background(255);
  console.log("currentPage: " + currentPage);
  image(storybookArray[currentPage],0,0);
  text(storyText[currentPage], 10,50);


}
