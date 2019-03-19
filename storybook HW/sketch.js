var storybookArray0, storybookArray1, storybookArray2, storybookArray3;

var storyText0 = "";
var storyText1 = "Here comes timmy";
var storyText2 = "He's about to make the jump";
var storyText3 = "Timmy sticks the landing!";

var page0,page1,page2,page3;

var currentPage = 0;

function preload(){
  storybookArray0 = loadImage("assets/story-1.png");
  storybookArray1 = loadImage("assets/story-2.png");
  storybookArray2 = loadImage("assets/story-3.png");
  storybookArray3 = loadImage("assets/story-4.png");

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
  page3 = createButton("Page 3");
  page3.position(300,400);
  page3.mousePressed(function(){
    currentPage = 3;
  });

}

function draw() {
  // put drawing code here
  background(255);
  console.log("currentPage: " + currentPage);


  if(currentPage == 0){
    image(storybookArray0,0,0);
    text(storyText0, 0,0);
  }else if(currentPage == 1){
    image(storybookArray1,0,0);
    text(storyText1, 60,50);
  }else if(currentPage == 2){
    image(storybookArray2,0,0);
    text(storyText2, 100,50);
  }else if(currentPage == 3){
    image(storybookArray3,0,0);
    text(storyText3, 100,300);
  }


}
