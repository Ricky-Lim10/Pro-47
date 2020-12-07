var player, guard1, guard2, guard3
var score;
var emerald;
var shelf1, shelf2;
var level;
var resetButton, startButton;
var gameState;

function setup() {
  createCanvas(800,800);
  player = createSprite(100,100,10,10);
  
  shelf1 = createSprite(250,400,50,500);
  shelf2 = createSprite(550,400,50,500);

  guard1 = new Guard(150,200,10,10);
  guard2 = new Guard(350,600,10,10);
  guard3 = new Guard(700,400,10,10);

  resetButton = createButton('Restart');
  startButton = createButton('Start')

  gameState = 0;

  emerald = createSprite(450,50,25,25);

  score = 0;
  level = 1;
}

function draw() {
  background(255,255,255);  

  

  if(gameState === 0){

    player.position.x = 100;
    player.position.y = 100;

    text("Click Start to Continue",400,250);
    startButton.visible = true;

    player.visible = false;
    shelf1.visible = false;
    shelf2.visible = false;
    guard1.visible = false;
    guard2.visible = false;
    guard3.visible = false;
    emerald.visible = false;

    if(level === 1){
      text("Steal as much Items as you can and bring them back to the van! But make sure not to get caught!", 200,200);
      text("Level:"+1,450,270)
    }
    if(level > 1){
      text("Level:"+ level, 400,270);
    }
    startButton.mousePressed(()=>{
      gameState = 1;
    })
  }

  if(gameState === 1){
    hide();

  text("Score:"+ score, 50,50);
  text("Level" + level, 100,50);

  if(keyDown(DOWN_ARROW)){
    player.y = player.y+5;
  }
  if(keyDown(UP_ARROW)){
    player.y = player.y-5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x -5;
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x +5;
  }

  if(player.collide(guard1 || guard2 || guard3)){
    player.visible = false;
    shelf1.visible = false;
    shelf2.visible = false;
    guard1.visible = false;
    guard2.visible = false;
    guard3.visible = false;
    emerald.visible = false;

    gameState = 2;
  }

    if(player.collide(emerald)){
      level = level +1;
      speed = speed +1;
      player.position.x = 100
      player.position.y =100
      gameState = 0
    }

    resetButton.mousePressed(()=>{
      reset();
    })
  
}

  if(gameState === 2){
    text("You got caught!!!",400,200);   
    reset();

  }

  
  drawSprites();
}

function reset(){
  gameState = 0;
    score = 0;
    level = 1;
    speed = 1;

  }

function hide(){
  startButton.hide();
}