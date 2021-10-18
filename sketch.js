

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

 var choose;
 var gameState;
 var obstacles;


function preload(){
    bgImg = loadImage("sprites/background.jpg");
    ship1Img = loadImage("sprites/ship1.png");
    ship2Img = loadImage("sprites/ship2.png");
    ship3Img = loadImage("Sprites/ship3.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    start = createButton("START");
    start.position(windowWidth/2, windowHeight/2);

  
    
    ship1 = createSprite(windowWidth/4 , windowHeight/2, 10,10);
    ship1.addImage(ship1Img);
    ship1.scale = 0.2
    ship1.visible = false;

    ship2 = createSprite(windowWidth/2 + 200, windowHeight/2, 10,10);
    ship2.addImage(ship2Img);
    ship2.scale = 0.2
    ship2.visible = false;

    ship3 = createSprite(windowWidth/8 +450, windowHeight/2, 10,10);
    ship3.addImage(ship3Img);
    ship3.scale = 0.2
    ship3.visible = false;

    gameState = "standBy";

    imageMode(CENTER);

}

function draw(){
    background("white");
   image(bgImg,displayWidth/2,displayHeight/2,displayWidth, displayHeight);

  start.mousePressed(
      ()=>{
        gameState = "CHOOSE";

      }  
  )
  if(gameState === "CHOOSE"){
    ship1.visible = true;
    ship2.visible = true;
    ship3.visible = true;

    choose = createElement("h1")
    choose.html("choose your wanderer");
    choose.position(200,100);
    start.hide();
    
    if(mousePressedOver(ship1)){
        ship2.destroy();
        ship3.destroy();
        ship1.x = mouseX;
        ship1.y = mouseY;
    }
    else if(mousePressedOver(ship2)){
        ship1.destroy()
        ship3.destroy()
        ship2.x = mouseX;
        ship2.y = mouseY;
    }
    else if(mousePressedOver(ship3)){
        ship1.destroy()
        ship2.destroy()
        ship3.x = mouseX;
        ship3.y = mouseY;
    }
  }

  
 // choose.hide();

    drawSprites();
}

function spwanAsteroids(){
    if(frameCount % 50 === 0){
        obstacles = createSprite(Math.random(displayWidth/8,displayWidth -100),displayHeight-100,10,10);
        obstacles.velocity.y = -10;
    }

}