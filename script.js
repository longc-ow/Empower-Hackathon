/* VARIABLES */
let screen = 0;
let bgColor = ("#123456");
let playButton;
let leftButton1, leftButton2, leftButton3;
let rightButton1, rightButton2, rightButton3;
let catcher;
let apronImg;
let bookImg;
let insuranceImg;
let loanImg;
let busImg;
let walkImg;
let score = 0;
let score2 = 0;
let score3 = 0;
let continueButton;
let continueButton2;
let continueButton3;

//game 1
let fallingObject1, fallingObject2, fallingObject3, fallingObject4;

//game2
let fallingObject5, fallingObject6, fallingObject7, fallingObject8;

//game3
let fallingObject9, fallingObject10, fallingObject11, fallingObject12;

//fonts
let comingSoonFont;

//links
let firstGenerationFoundation;
let closeTheGapFoundation;
let firstGenSupport;
let collegeForSocialInnovation;
let flipNational;

let calmClarity;
let crisisLifeline;
let theFabulous;
let nami;

/* PRELOAD LOADS FILES */
function preload() {
  apronImg = loadImage("assets/apron.webp");
  bookImg = loadImage("assets/book.png");
  insuranceImg = loadImage("assets/insurance.png");
  loanImg = loadImage("assets/loan.png");
  busImg = loadImage("assets/bus.png");
  walkImg = loadImage("assets/walk.png");

  comingSoonFont = loadFont("assets/ComingSoon-Regular.ttf");
}

function setup() {
  createCanvas(600, 400);

  //fonts
  textFont(comingSoonFont);
  
  // Set up the home screen
  background(bgColor);
  print("Display screen 0");
  screen = 0;
  //add text
  fill("#c3cad4");
  textSize(30);
  //textAlign(CENTER);
  text("A Day in the Life", 180, 80);
  
  fill("#c3cad4");
  textSize(13);
  //textAlign(CENTER);
  text("The goal of our education-based game is to put the player\n in the shoes on a first-generation low-income college student.\n Our game forces you to make choices that these\n students are forced to make daily.\n\nThis game will provide insight into real struggles FGLI \nstudents face, and the effect of those issues\n on mental health. We hope to show solidarity to those\n impacted who face similar struggles.\n Resources are provided at the end to help.", 140, 120);
  
  // Create buttons for all screens
  playButton = new Sprite(width / 2, height / 2 + 100, "k");
  playButton.rotationLock = true;
  
  leftButton1 = new Sprite(width / 2 - 100, height / 2 + 100, "k");
  leftButton1.rotationLock = true;
  
  rightButton1 = new Sprite(width / 2 + 100, height / 2 + 100, "k");
  rightButton1.rotationLock = true;
  
  continueButton = new Sprite(width / 2, height / 2 + 100, "k");
  continueButton.rotationLock = true;
  continueButton.pos = {x: -100, y: -100};

  continueButton2 = new Sprite(width / 2, height / 2 + 100, "k");
  continueButton2.rotationLock = true;
  continueButton2.pos = {x: -100, y: -100};

  continueButton3 = new Sprite(width / 2, height / 2 + 100, "k");
  continueButton3.rotationLock = true;
  continueButton3.pos = {x: -100, y: -100};
  
  leftButton2 = new Sprite(width / 2 - 100, height / 2 + 100, "k");
  leftButton2.rotationLock = true;
  leftButton2.pos = {x: -100, y: -100};
  
  rightButton2 = new Sprite(width / 2 + 100, height / 2 + 100, "k");
  rightButton2.rotationLock = true;
  rightButton2.pos = {x: -100, y: -100};

  leftButton3 = new Sprite(width / 2 - 100, height / 2 + 100, "k");
  leftButton3.rotationLock = true;
  leftButton3.pos = {x: -100, y: -100};
  
  rightButton3 = new Sprite(width / 2 + 100, height / 2 + 100, "k");
  rightButton3.rotationLock = true;
  rightButton3.pos = {x: -100, y: -100};

  //Image sizes
  apronImg.resize(35, 45);
  bookImg.resize(35, 35);
  insuranceImg.resize(35,40);
  loanImg.resize(35, 45);
  busImg.resize(50,35);
  walkImg.resize(35,45);

  //Create the player/catcher 
  catcher = new Sprite();
  catcher.pos = { x: width / 2, y: height / 2 };
  catcher.diameter = 30;
  catcher.color = "orange";
  catcher.collider = "k";
  catcher.rotationLock = true;

  //Create the falling objects
  //game1
  fallingObject1 = new Sprite(bookImg, 148, 0, 10);
  fallingObject1.vel.y = random(2,3);
  fallingObject1.rotationLock = true;
  fallingObject1.direction = "down";
  fallingObject1.pos = {x:20, y:-8};

  fallingObject2 = new Sprite(bookImg, 100, 0, 10);
  fallingObject2.vel.y = random(2, 3);
  fallingObject2.rotationLock = true;
  fallingObject2.direction = "down";
  fallingObject2.pos = { x: 80, y: -6 };

  fallingObject3 = new Sprite(apronImg, 250, 0, 10);
  fallingObject3.vel.y = random(2, 5);
  fallingObject3.rotationLock = true;
  fallingObject3.direction = "down";
  fallingObject3.pos = { x: 280, y: -5 };

  fallingObject4 = new Sprite(apronImg, 310, 0, 10);
  fallingObject4.vel.y = random(2, 5);
  fallingObject4.rotationLock = true;
  fallingObject4.direction = "down";
  fallingObject4.pos = { x: 530, y: -10 };

  //game2
  fallingObject5 = new Sprite(insuranceImg, 148, 0, 10);
  fallingObject5.vel.y = random(2, 3);
  fallingObject5.rotationLock = true;
  fallingObject5.direction = "down";
  fallingObject5.pos = { x: 20, y: -8 };

  fallingObject6 = new Sprite(insuranceImg, 100, 0, 10);
  fallingObject6.vel.y = random(2, 3);
  fallingObject6.rotationLock = true;
  fallingObject6.direction = "down";
  fallingObject6.pos = { x: 80, y: -6 };

  fallingObject7 = new Sprite(loanImg, 250, 0, 10);
  fallingObject7.vel.y = random(2, 5);
  fallingObject7.rotationLock = true;
  fallingObject7.direction = "down";
  fallingObject7.pos = { x: 280, y: -5 };

  fallingObject8 = new Sprite(loanImg, 310, 0, 10);
  fallingObject8.vel.y = random(2, 5);
  fallingObject8.rotationLock = true;
  fallingObject8.direction = "down";
  fallingObject8.pos = { x: 530, y: -10 };

  //game3
  fallingObject9 = new Sprite(busImg, 148, 0, 10);
  fallingObject9.vel.y = random(2, 3);
  fallingObject9.rotationLock = true;
  fallingObject9.direction = "down";
  fallingObject9.pos = { x: 20, y: -8 };

  fallingObject10 = new Sprite(busImg, 100, 0, 10);
  fallingObject10.vel.y = random(2, 3);
  fallingObject10.rotationLock = true;
  fallingObject10.direction = "down";
  fallingObject10.pos = { x: 80, y: -6 };

  fallingObject11 = new Sprite(walkImg, 250, 0, 10);
  fallingObject11.vel.y = random(2, 5);
  fallingObject11.rotationLock = true;
  fallingObject11.direction = "down";
  fallingObject11.pos = { x: 280, y: -5 };

  fallingObject12 = new Sprite(walkImg, 310, 0, 10);
  fallingObject12.vel.y = random(2, 5);
  fallingObject12.rotationLock = true;
  fallingObject12.direction = "down";
  fallingObject12.pos = { x: 530, y: -10 };

  textSize(13);
}

function draw() {
  // Check play button
  if (playButton.mouse.presses()) {
    print("Display screen 1");
    screen = 1;
  }
  
  if (screen == 1) {
    showScreen1();
  }
   if (leftButton1.mouse.presses()) {
    print("Display screen 2");
    screen = 2;
    catcher.pos = { x: width / 2, y: 380 };
     
    fallingObject1.x = random(20, 580);
    fallingObject1.y = random(-30, 0);
    fallingObject1.vel.y = random(2, 4);

    fallingObject2.x = random(20, 580);
    fallingObject2.y = random(-30, 0);
    fallingObject2.vel.y = random(2, 4);

    fallingObject3.x = random(20, 580);
    fallingObject3.y = random(-30, 0);
    fallingObject3.vel.y = random(2, 4);

    fallingObject4.x = random(20, 580);
    fallingObject4.y = random(-30, 0);
    fallingObject4.vel.y = random(2, 4);
  }
    else if (rightButton1.mouse.presses()) {
    print("Display screen 2");
    screen = 2;
    catcher.pos = { x: width / 2, y: 380 };

    fallingObject1.x = random(20, 580);
    fallingObject1.y = random(-30, 0);
    fallingObject1.vel.y = random(2, 4);

    fallingObject2.x = random(20, 580);
    fallingObject2.y = random(-30, 0);
    fallingObject2.vel.y = random(2, 4);

    fallingObject3.x = random(20, 580);
    fallingObject3.y = random(-30, 0);
    fallingObject3.vel.y = random(2, 4);

    fallingObject4.x = random(20, 580);
    fallingObject4.y = random(-30, 0);
    fallingObject4.vel.y = random(2, 4);
  } 

  if (screen == 2) {
    background("#800000");
    showScreen2();
    //catcher.pos = {x:width/2, y: 380};
    //Move catcher
    if (kb.pressing("left")) {
      catcher.vel.x = -4;
    } else if (kb.pressing("right")) {
      catcher.vel.x = 4;
    } else {
      catcher.vel.x = 0;
    }

  }
   if (score == 5) {
        print("Display screen 3");
        screen = 3;
        showScreen3();
  }
  
  if (screen ==3){
    score = 0;
  }
     if (continueButton.mouse.presses()) {
    screen = 4;
    print("Display screen 4");
    //showScreen4();
  }

  if (screen == 4) {
      showScreen4();
  }
    if (leftButton2.mouse.presses()) {
      print("Display screen 5");
      screen = 5;
      catcher.pos = { x: width / 2, y: 380 };

      fallingObject5.x = random(20, 580);
      fallingObject5.y = random(-30, 0);
      fallingObject5.vel.y = random(2, 4);

      fallingObject6.x = random(20, 580);
      fallingObject6.y = random(-30, 0);
      fallingObject6.vel.y = random(2, 4);

      fallingObject7.x = random(20, 580);
      fallingObject7.y = random(-30, 0);
      fallingObject7.vel.y = random(2, 4);

      fallingObject8.x = random(20, 580);
      fallingObject8.y = random(-30, 0);
      fallingObject8.vel.y = random(2, 4);
       }
    else if (rightButton2.mouse.presses()) {
    print("Display screen 5");
    screen = 5;
    catcher.pos = { x: width / 2, y: 380 };

    fallingObject5.x = random(20, 580);
    fallingObject5.y = random(-30, 0);
    fallingObject5.vel.y = random(2, 4);

    fallingObject6.x = random(20, 580);
    fallingObject6.y = random(-30, 0);
    fallingObject6.vel.y = random(2, 4);

    fallingObject7.x = random(20, 580);
    fallingObject7.y = random(-30, 0);
    fallingObject7.vel.y = random(2, 4);

    fallingObject8.x = random(20, 580);
    fallingObject8.y = random(-30, 0);
    fallingObject8.vel.y = random(2, 4);
    }

  if (screen ==5){
    background ("#bec7b9");
    showScreen5();
    //Move catcher
    if (kb.pressing("left")) {
      catcher.vel.x = -4;
    } else if (kb.pressing("right")) {
      catcher.vel.x = 4;
    } else {
      catcher.vel.x = 0;
  }
}
    if (score2 == 5){
       print("Display screen 6");
        screen = 6;
        showScreen6();
    }
  
  if (screen == 6){
    score2 = 0;
  }
      if (continueButton2.mouse.presses()) {
    screen = 7;
    print("Display screen 7");
  }

  if (screen == 7){
    showScreen7()
  }
    if (leftButton3.mouse.presses()) {
      print("Display screen 8");
      screen = 8;
      catcher.pos = { x: width / 2, y: 380 };

      fallingObject9.x = random(20, 580);
      fallingObject9.y = random(-30, 0);
      fallingObject9.vel.y = random(2, 4);

      fallingObject10.x = random(20, 580);
      fallingObject10.y = random(-30, 0);
      fallingObject10.vel.y = random(2, 4);

      fallingObject11.x = random(20, 580);
      fallingObject11.y = random(-30, 0);
      fallingObject11.vel.y = random(2, 4);

      fallingObject12.x = random(20, 580);
      fallingObject12.y = random(-30, 0);
      fallingObject12.vel.y = random(2, 4);
       }
    else if (rightButton3.mouse.presses()) {
    print("Display screen 8");
    screen = 8;
    catcher.pos = { x: width / 2, y: 380 };

    fallingObject9.x = random(20, 580);
    fallingObject9.y = random(-30, 0);
    fallingObject9.vel.y = random(2, 4);

    fallingObject10.x = random(20, 580);
    fallingObject10.y = random(-30, 0);
    fallingObject10.vel.y = random(2, 4);

    fallingObject11.x = random(20, 580);
    fallingObject11.y = random(-30, 0);
    fallingObject11.vel.y = random(2, 4);

    fallingObject12.x = random(20, 580);
    fallingObject12.y = random(-30, 0);
    fallingObject12.vel.y = random(2, 4);
    }

  if (screen == 8){
    background("#e6dce3");
    showScreen8();
    //catcher.pos = {x:width/2, y: 380};
    //Move catcher
    if (kb.pressing("left")) {
      catcher.vel.x = -4;
    } else if (kb.pressing("right")) {
      catcher.vel.x = 4;
    } else {
      catcher.vel.x = 0;
    }
   
  }
    if (score3 == 5){
      print("Display screen 9");
        screen = 9;
        showScreen9();
    }

  if (screen == 9){
    score2 = 0;
    score3 = 0;
  }
    if (continueButton3.mouse.presses()) {
    screen = 10;
    print("Display screen 10");
  }

  if (screen == 10){
    showScreen10();
  }

 else if (screen == 0) {
    playButton.w = 100;
    playButton.h = 50;
    playButton.collider = "s";
    playButton.color = "#antiquewhite";
    playButton.text = "play";

    //MOVE SPRITES OFF OF SCREEN
    leftButton1.pos = { x: -500, y: -500 };
    rightButton1.pos = { x: -500, y: -500 };
    fallingObject1.pos = { x: -500, y: -200 };
    fallingObject2.pos = { x: -500, y: -200 };
    fallingObject3.pos = { x: -500, y: -200 };
    fallingObject4.pos = { x: -500, y: -200 };

    catcher.pos = { x: -500, y: -500 };
    leftButton2.pos = { x: -500, y: -500 };
    rightButton2.pos = { x: -500, y: -500 };
    fallingObject5.pos = { x: -500, y: -200 };
    fallingObject6.pos = { x: -500, y: -200 };
    fallingObject7.pos = { x: -500, y: -200 };
    fallingObject8.pos = { x: -500, y: -200 };

   leftButton3.pos = { x: -500, y: -500 };
    rightButton3.pos = { x: -500, y: -500 };
    fallingObject9.pos = { x: -500, y: -200 };
    fallingObject10.pos = { x: -500, y: -200 };
    fallingObject11.pos = { x: -500, y: -200 };
    fallingObject12.pos = { x: -500, y: -200 };
  }
}

/* FUNCTIONS */
function showScreen1() {
  background("#800000");
  leftButton1.w = 50;
  leftButton1.h = 50;
  leftButton1.collider = "s";
  leftButton1.color = "#antiquewhite";
  leftButton1.text = "study";
  leftButton1.pos = { x: width / 2 - 100, y: height / 2 + 100 };

  rightButton1.w = 50;
  rightButton1.h = 50;
  rightButton1.collider = "s";
  rightButton1.color = "#antiquewhite";
  rightButton1.text = "work";
  rightButton1.pos = { x: width / 2 + 100, y: height / 2 + 100 };

  //Remove sprites
  catcher.pos = { x: -900, y: -900 };
  fallingObject1.pos = { x: -900, y: -900 };
  fallingObject2.pos = { x: -900, y: -900 };
  fallingObject3.pos = { x: -900, y: -900 };
  fallingObject4.pos = { x: -900, y: -900 };

  //Remove play Button
  playButton.pos = { x: -900, y: -900 };

  fill("#c7beb1");
  textSize(13);
  text("Studying for final vs working- Sofía is a first-\ngeneration low-income college student who works part time\n at her local cafe to make ends meet while supporting her family. \nShe often finds herself in a predicament struggling to balance\nbetween studying and working. As her finals approach, \nshe has to make a tough decision between working additional hours \nat her job or spending time studying.\n What would you do? Collect your choice in the game.", 100,120);
} //give scenerio
function showScreen2() {
  background("#c7beb1");

  fill("227,147,43");
  textSize(13);
  text("Score: " + score, 30,30);

  //instructions
  fill("227, 147, 43");
  textSize(13);
  text("Move the catcher with the\n left and right arrow keys \nto catch the falling books\n or aprons. First generation, \nlow income students have to \n juggle responsibilities like \nthis daily.", width - 175, 20);

  //remove buttons
  leftButton1.pos = { x: -900, y: -900 };
  rightButton1.pos = { x: -900, y: -900 };

  //Reset avoider locations once they reach edge of screen 
  if (fallingObject1.y >= height) {
    fallingObject1.x = random(20, 580);
    fallingObject1.y = -10;
    fallingObject1.vel.y = 3;
    //score = score -1;
  }
  if (fallingObject2.y >= height) {
    fallingObject2.x = random(20, 580);
    fallingObject2.y = -10;
    fallingObject2.vel.y = 5;
    //score = score -1;
  }
  if (fallingObject3.y >= height) {
    fallingObject3.x = random(20, 580);
    fallingObject3.y = -10;
    fallingObject3.vel.y = 5;
    //score = score -1;
  }
  if (fallingObject4.y >= height) {
    fallingObject4.x = random(20, 580);
    fallingObject4.y = -10;
    fallingObject4.vel.y = 4;
    //score = score -1;
  }
  
  if (fallingObject1.collides(catcher)) {
    fallingObject1.y = 0;
    fallingObject1.x = random(width);
    fallingObject1.vel.y = random(2, 3);
    fallingObject1.direction = "down";
    score = score + 1;
  }
  else if (fallingObject2.collides(catcher)) {
    fallingObject2.y = 0;
    fallingObject2.x = random(width);
    fallingObject2.vel.y = random(2, 3);
    fallingObject2.direction = "down";
    score = score + 1;
  }
  else if (fallingObject3.collides(catcher)) {
    fallingObject3.y = 0;
    fallingObject3.x = random(width);
    fallingObject3.vel.y = random(2, 4);
    fallingObject3.direction = "down";
    score = score + 1;
  }
  else if (fallingObject4.collides(catcher)) {
    fallingObject4.y = 0;
    fallingObject4.x = random(width);
    fallingObject4.vel.y = random(2, 5);
    fallingObject4.direction = "down";
    score = score + 1;
  }

  //Don't let the player move off the screen
  /*if (catcher.y < 380) {
    catcher.y = 380;
  }*/
  if (catcher.x < 20) {
    catcher.x = 20;
  } else if (catcher.x > 580) {
    catcher.x =580;
  }
} 
function showScreen3() {
  background("#c7beb1");

  //Remove sprites
  catcher.pos = { x: -900, y: -900 };
  fallingObject1.pos = { x: -900, y: -900 };
  fallingObject2.pos = { x: -900, y: -900 };
  fallingObject3.pos = { x: -900, y: -900 };
  fallingObject4.pos = { x: -900, y: -900 };

  continueButton.pos = {x:width / 2, y:height / 2 + 100 };
  continueButton.w = 100;
  continueButton.h = 50;
  continueButton.collider = "s";
  continueButton.color = "#antiquewhite";
  continueButton.text = "continue";

  //add text and facts
  fill("#787168");
  textSize(13);
  //textAlign(CENTER);
  text("First-generation students face a challenging task of having to balance\n between their academic responsibilities and their personal lives.\n Approximately 43% of these students feel they have to live a double life,\n keeping college and personal life apart.",100, 120);
  

} //give facts
function showScreen4() { 
  background("green");
  //Remove continue Button
  continueButton.pos = { x: -900, y: -900 };
  
  leftButton2.w = 50;
  leftButton2.h = 50;
  leftButton2.collider = "s";
  leftButton2.color = "#antiquewhite";
  leftButton2.text = "Loans";
  leftButton2.pos = { x: width / 2 - 100, y: height / 2 + 100 };

  rightButton2.w = 50;
  rightButton2.h = 50;
  rightButton2.collider = "s";
  rightButton2.color = "#antiquewhite";
  rightButton2.text = "Health";
  rightButton2.pos = { x: width / 2 + 100, y: height / 2 + 100 };

  fill("#bec7b9");
  textSize(13);
  text("Insurance vs student Loans- One of Sofía's primary concerns is insurance.\n She is unsure of whether she should use the money to pay off her \nloans, or invest in a health care plan\n which gives her security in the event of an\n emergency. What would you do? Collect your choice in the game.", 100,120);

} //give scenerio
function showScreen5() {
  background ("#bec7b9");
  fill("227,147,43");
  textSize(13);
  text("Score: " + score2, 30,30);

  //instructions
  fill("227, 147, 43");
  textSize(13);
  text("Move the catcher with the\n left and right arrow keys \nto catch the student loans\n or insurance bills. First \ngeneration, low income \nstudents have to plan \nand budget like \nthis daily.", width - 175, 20);

  //remove buttons
  leftButton2.pos = { x: -900, y: -900 };
  rightButton2.pos = { x: -900, y: -900 };

  //Reset avoider locations once they reach edge of screen 
  if (fallingObject5.y >= height) {
    fallingObject5.x = random(20, 580);
    fallingObject5.y = -10;
    fallingObject5.vel.y = 3;
    //score = score -1;
  }
  if (fallingObject6.y >= height) {
    fallingObject6.x = random(20, 580);
    fallingObject6.y = -10;
    fallingObject6.vel.y = 5;
    //score = score -1;
  }
  if (fallingObject7.y >= height) {
    fallingObject7.x = random(20, 580);
    fallingObject7.y = -10;
    fallingObject7.vel.y = 3;
    //score = score -1;
  }
  if (fallingObject8.y >= height) {
    fallingObject8.x = random(20, 580);
    fallingObject8.y = -10;
    fallingObject8.vel.y = 4;
    //score = score -1;
  }
  
  if (fallingObject5.collides(catcher)) {
    fallingObject5.y = 0;
    fallingObject5.x = random(width);
    fallingObject5.vel.y = random(2, 3);
    fallingObject5.direction = "down";
    score2 = score2 + 1;
  }
  else if (fallingObject6.collides(catcher)) {
    fallingObject6.y = 0;
    fallingObject6.x = random(width);
    fallingObject6.vel.y = random(2, 3);
    fallingObject6.direction = "down";
    score2 = score2 + 1;
  }
  else if (fallingObject7.collides(catcher)) {
    fallingObject7.y = 0;
    fallingObject7.x = random(width);
    fallingObject7.vel.y = random(2, 4);
    fallingObject7.direction = "down";
    score2 = score2 + 1;
  }
  else if (fallingObject8.collides(catcher)) {
    fallingObject8.y = 0;
    fallingObject8.x = random(width);
    fallingObject8.vel.y = random(2, 5);
    fallingObject8.direction = "down";
    score2 = score2 + 1;
  }

  //Don't let the player move off the screen
  if (catcher.y < 380) {
    catcher.y = 380;
  }
  if (catcher.x < 20) {
    catcher.x = 20;
  } else if (catcher.x > 580) {
    catcher.x =580;
  }
  
  
} 
function showScreen6(){ 
  background ("#bec7b9");
  //Remove sprites
  catcher.pos = { x: -900, y: -900 };
  fallingObject5.pos = { x: -900, y: -900 };
  fallingObject6.pos = { x: -900, y: -900 };
  fallingObject7.pos = { x: -900, y: -900 };
  fallingObject8.pos = { x: -900, y: -900 };

  continueButton2.pos = {x:width / 2, y:height / 2 + 100 };
  continueButton2.w = 100;
  continueButton2.h = 50;
  continueButton2.collider = "s";
  continueButton2.color = "#antiquewhite";
  continueButton2.text = "continue";

  //add text and facts
  fill("#666b64");
  textSize(13);
  textAlign(CENTER);
  text("Financial difficulties are the top reason first-generation\n students consider dropping out of college.\n Due to their low economic status, their family can only provide them \nwith a limited amount of support. First-generation students \nare less likely to receive both scholarships and\n financial help from their families for school because\n they may not have the necessary knowledge or resources\n to navigate this process.", 300, 120);
  
} //give facts
function showScreen7(){
background("#633454");
  //Remove continue Button
  continueButton2.pos = { x: -900, y: -900 };
  
  leftButton3.w = 50;
  leftButton3.h = 50;
  leftButton3.collider = "s";
  leftButton3.color = "#antiquewhite";
  leftButton3.text = "Bus";
  leftButton3.pos = { x: width / 2 - 100, y: height / 2 + 100 };

  rightButton3.w = 50;
  rightButton3.h = 50;
  rightButton3.collider = "s";
  rightButton3.color = "#antiquewhite";
  rightButton3.text = "Walk";
  rightButton3.pos = { x: width / 2 + 100, y: height / 2 + 100 }; 

  fill("#d4cbd1");
  textSize(13);
  textAlign(CENTER);
  text("Public transportation vs Walking- Sofía has to decide between taking\n public transportation or walking on a daily basis. Public transportation is the more \nconvenient option as it saves her time and energy for her studies and work.\n However, with her tight budget, walking is the most affordable.\n What would you do? Collect your choice in the game.", 300, 120);
} //give scenerio
function showScreen8(){
  background("#d4cbd1");

  fill("227,147,43");
  textSize(13);
  text("Score: " + score3, 30,30);

  //instructions
  fill("227, 147, 43");
  textSize(13);
  textAlign(LEFT);
  text("Move the catcher with the\n left and right arrow keys \nto catch the falling buses\n or take a walk. First \ngeneration, low income \nstudents have to make\n choices like this daily.", width - 175, 20);

  //remove buttons
  leftButton3.pos = { x: -900, y: -900 };
  rightButton3.pos = { x: -900, y: -900 };

  //Reset avoider locations once they reach edge of screen 
  if (fallingObject9.y >= height) {
    fallingObject9.x = random(20, 580);
    fallingObject9.y = -10;
    fallingObject9.vel.y = 3;
    //score = score -1;
  }
  if (fallingObject10.y >= height) {
    fallingObject10.x = random(20, 580);
    fallingObject10.y = -10;
    fallingObject10.vel.y = 5;
    //score = score -1;
  }
  if (fallingObject11.y >= height) {
    fallingObject11.x = random(20, 580);
    fallingObject11.y = -10;
    fallingObject11.vel.y = 3;
    //score = score -1;
  }
  if (fallingObject12.y >= height) {
    fallingObject12.x = random(20, 580);
    fallingObject12.y = -10;
    fallingObject12.vel.y = 4;
    //score = score -1;
  }
  
  if (fallingObject9.collides(catcher)) {
    fallingObject9.y = 0;
    fallingObject9.x = random(width);
    fallingObject9.vel.y = random(2, 3);
    fallingObject9.direction = "down";
    score3 = score3 + 1;
  }
  else if (fallingObject10.collides(catcher)) {
    fallingObject10.y = 0;
    fallingObject10.x = random(width);
    fallingObject10.vel.y = random(2, 3);
    fallingObject10.direction = "down";
    score3 = score3 + 1;
  }
  else if (fallingObject11.collides(catcher)) {
    fallingObject11.y = 0;
    fallingObject11.x = random(width);
    fallingObject11.vel.y = random(2, 4);
    fallingObject11.direction = "down";
    score3 = score3 + 1;
  }
  else if (fallingObject12.collides(catcher)) {
    fallingObject12.y = 0;
    fallingObject12.x = random(width);
    fallingObject12.vel.y = random(2, 5);
    fallingObject12.direction = "down";
    score3 = score3 + 1;
  }

  //Don't let the player move off the screen
  if (catcher.y < 380) {
    catcher.y = 380;
  }
  if (catcher.x < 20) {
    catcher.x = 20;
  } else if (catcher.x > 580) {
    catcher.x =580;
  }
  
}
function showScreen9(){
  background ("#d4cbd1");
  //Remove sprites
  catcher.pos = { x: -900, y: -900 };
  fallingObject9.pos = { x: -900, y: -900 };
  fallingObject10.pos = { x: -900, y: -900 };
  fallingObject11.pos = { x: -900, y: -900 };
  fallingObject12.pos = { x: -900, y: -900 };

  continueButton3.pos = {x:width / 2, y:height / 2 + 100 };
  continueButton3.w = 100;
  continueButton3.h = 50;
  continueButton3.collider = "s";
  continueButton3.color = "#antiquewhite";
  continueButton3.text = "continue";

  fill("#615a5f");
  textSize(13);
  textAlign(CENTER);
  text("Nearly half of first-generation college students are forced\n to work full or part-time to support their families. While they may find it more convenient \nto commute to college using public transportation, they may not be able to \n afford it so they walk or bike to save money.", 300, 120);
  
} //give facts
function showScreen10(){
  background(202, 205, 248);

  //Remove continue Button
  continueButton3.pos = { x: -900, y: -900 };

  fill(0);
  textSize(25);
  textAlign(LEFT);
  text("You are not alone. Below are resrouces to help \nif you or someone you know are facing \nsimilar issues:", 30, 40);
  
  fill(0);
  textSize(10);
  textAlign(LEFT);

  //links
  firstGenerationFoundation = createA("http://www.firstgenerationfoundation.org/products-services/supporters/donors/make-a-donation", "First Generation Foundation");
  firstGenerationFoundation.position(40, 140);
  
  closeTheGapFoundation = createA("https://www.closethegapfoundation.org/partner", "Close the Gap Foundation");
  closeTheGapFoundation.position(40, 170);
  
  firstGenSupport = createA("https://secure.givelively.org/donate/hackplus/first-gen-support", "First Gen Support");
  firstGenSupport.position(40, 200);
  
  collegeForSocialInnovation = createA ("https://collegeforsocialinnovation.org/checkout/donate?donatePageId=6298e659af21aa48eeb458ae", "College for Social Innovation");
  collegeForSocialInnovation.position(40, 230);
  
  flipNational = createA("https://www.flipnational.org/", "FLIP National");
  flipNational.position(40, 260);

  calmClarity = createA("https://www.calmclarity.org/", "Calm Clarity");
  calmClarity.position(340, 140);

  crisisLifeline = createA("https://988lifeline.org/", "Crisis Lifeline");
  crisisLifeline.position(340, 170);

  theFabulous = createA("https://www.thefabulous.co/", "The Fabulous");
  theFabulous.position(340, 200);

  nami = createA("https://www.nami.org/Home", "National Alliance on Mental Illness");
  nami.position(340, 230);

  fill(0);
  textSize(20);
  textAlign(RIGHT);
  text("Thank you for playing.", 570, 360);
  
} //give resources