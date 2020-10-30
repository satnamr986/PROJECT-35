//Create variables here
var dog, dogImg, dogImg1
var database;
var foods, foodStoke;

function preload()
{
  dogImg = loadImage("Tmages/Dog.png");
  dogImg1 = loadImage("Image/happy dog.png");
}

function setup() {
  database = fireBase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250, 300, 150, 150);
  dog.addImage(dogImg);
  dog.scale = 0.25;

  foodStoke = database.ref('food');
  foodStoke.on("value", readStoke);
  textSize(20);
  
}
function draw() {  
  background(45,130,67);
  if(keyWentDown(UP_ARROW)){
    writeStroke(foods);
    dog.addImage(dogImg);
  }

  drawSprites();
  //add styles here
  fill(255, 255, 254);
  stroke("black");
  text("Food.remaining :" + foods,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk", 130, 10, 300, 20);
}

//function to read values from DB
function readstock(data){
  foodS = data.vall();
}

//function to read values from DB
function writeStroke(x){
  if(x<=0){
    x=0;

  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}