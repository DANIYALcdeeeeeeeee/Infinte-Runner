var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var END


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  
  tower.velocityY = 6;

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage ("ghost",ghostImg);
  


}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    if (keyDown("left_arrow")) {
      ghost.x = ghost.x -3;
    }

    if (keyDown("right_arrow")) {
      ghost.x = ghost.x +3;
    }

    if (keyDown("space")) {
      ghost.velocityY = -7;
    }
  
    
    ghost.velocityY = ghost.velocityY + 0.8;

   

   spawnDoors();

    drawSprites();

    
}


function spawnDoors() {
  if (frameCount % 240 === 0 ) {
   var door = createSprite(200,-50)
    door.addImage(doorImg);
    var climber = createSprite(200,10);
    climber.addImage(climberImg);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    door.x = Math.round (random(120,240) );
    door.velocityY = 4;
    climber.x = door.x;
    climber.velocityY = 4;
    invisibleBlock.x = door.x;
    invisibleBlock.velocityY = 4
   
    climber.lifetime = 800;
    door.lifetime = 800;
    doorsGroup.add(door);
   climbersGroup.add(climber);
invisibleBlock.debug = true;
 invisibleBlockGroup.add(invisibleBlock);
 ghost.depth = door.depth
    ghost.depth += 1;

  }


}