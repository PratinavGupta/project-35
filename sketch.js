
var food;
var nameBox;

function preload() {
  dogimg = loadImage("images/dogimg.png");
  dogimg2 = loadImage("images/dogimg1.png");
  milkImage = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(800, 600);

  dog = createSprite(600, 400)
  dog.addImage(dogimg);
  dog.scale = 0.3;

  db = firebase.database();
  db_p = db.ref('food')
  db_p.on("value", db_number);

  bottle1 = createSprite(100, 300)
  bottle1.addImage(milkImage);
  bottle1.scale = 0.15;
  bottle1.visible = false;
  bottle2 = createSprite(250, 400)
  bottle2.addImage(milkImage);
  bottle2.scale = 0.15;
  bottle2.visible = false;
  bottle3 = createSprite(350, 400)
  bottle3.addImage(milkImage);
  bottle3.scale = 0.15;
  bottle3.visible = false;
  bottle4 = createSprite(200, 300)
  bottle4.addImage(milkImage);
  bottle4.scale = 0.15;
  bottle4.visible = false;
  bottle5 = createSprite(300, 300)
  bottle5.addImage(milkImage);
  bottle5.scale = 0.15;
  bottle5.visible = false;
  bottle6 = createSprite(450, 400)
  bottle6.addImage(milkImage);
  bottle6.scale = 0.15;
  bottle6.visible = false;
  bottle7 = createSprite(400, 300)
  bottle7.addImage(milkImage);
  bottle7.scale = 0.15;
  bottle7.visible = false;
  bottle8 = createSprite(500, 300)
  bottle8.addImage(milkImage);
  bottle8.scale = 0.15;
  bottle8.visible = false;
  bottle9 = createSprite(50, 400)
  bottle9.addImage(milkImage);
  bottle9.scale = 0.15;
  bottle9.visible = false;
  bottle10 = createSprite(150, 400)
  bottle10.addImage(milkImage);
  bottle10.scale = 0.15;
  bottle10.visible = false;

  nameBox = createInput('Name your dog');
  nameBox.position(550, 200);
  nameBox.size(100);
  nameBox.style('height', '30px');
  feedButton = createButton('Press here to feed the dog');
  feedButton.position(100, 50);
  feedButton.style('backgroundColor', '#ADD8E6')
  feedButton.style('width', '250px')
  feedButton.style('height', '50px')
  addButton = createButton('Add food to the stock');
  addButton.position(400, 50);
  addButton.style('backgroundColor', '#FFA500')
  addButton.style('width', '250px')
  addButton.style('height', '50px')

  timeBox = createInput('Name your dog');
  timeBox.position(550, 200);
  timeBox.size(100);
  timeBox.style('height', '30px');

}


function draw() {
  background(0);

  fill("yellow");
  textSize(20);
  text("milk bottles remaing = " + food, 60, 150);


  Bottle_change();

  feedButton.mousePressed(function () {
    dog.addImage(dogimg2);
    dbchange(food);
    if (food > 0)
      food--;
  })



  addButton.mousePressed(function () {
      food++;
      db.ref('/').set({ food:food });
  })



  drawSprites();
}


function db_number(a) {
  food = a.val();
}
function dbchange(b) {
  db.ref('/').set({ food: b })
}

function Bottle_change() {
  if (food > 9) {
    bottle10.visible = true;
    bottle9.visible = true;
    bottle8.visible = true;
    bottle7.visible = true;
    bottle6.visible = true;
    bottle5.visible = true;
    bottle4.visible = true;
    bottle3.visible = true;
    bottle2.visible = true;
    bottle1.visible = true;
  }
  if (food == 9) {
    bottle10.visible = false;
    bottle9.visible = true;
    bottle8.visible = true;
    bottle7.visible = true;
    bottle6.visible = true;
    bottle5.visible = true;
    bottle4.visible = true;
    bottle3.visible = true;
    bottle2.visible = true;
    bottle1.visible = true;
  }
  if (food == 8) {
    bottle10.visible = false;
    bottle9.visible = false;
    bottle8.visible = true;
    bottle7.visible = true;
    bottle6.visible = true;
    bottle5.visible = true;
    bottle4.visible = true;
    bottle3.visible = true;
    bottle2.visible = true;
    bottle1.visible = true;
  }
  if (food == 7) {
    bottle10.visible = false;
    bottle9.visible = false;
    bottle8.visible = false;
    bottle7.visible = true;
    bottle6.visible = true;
    bottle5.visible = true;
    bottle4.visible = true;
    bottle3.visible = true;
    bottle2.visible = true;
    bottle1.visible = true;
  }
  if (food == 6) {
    bottle10.visible = false;
    bottle9.visible = false;
    bottle8.visible = false;
    bottle7.visible = false;
    bottle6.visible = true;
    bottle5.visible = true;
    bottle4.visible = true;
    bottle3.visible = true;
    bottle2.visible = true;
    bottle1.visible = true;
  }
  if (food == 5) {
    bottle10.visible = false;
    bottle9.visible = false;
    bottle8.visible = false;
    bottle7.visible = false;
    bottle6.visible = false;
    bottle5.visible = true;
    bottle4.visible = true;
    bottle3.visible = true;
    bottle2.visible = true;
    bottle1.visible = true;
  }
  if (food == 4) {
    bottle10.visible = false;
    bottle9.visible = false;
    bottle8.visible = false;
    bottle7.visible = false;
    bottle6.visible = false;
    bottle5.visible = false;
    bottle4.visible = true;
    bottle3.visible = true;
    bottle2.visible = true;
    bottle1.visible = true;
  }
  if (food == 3) {
    bottle10.visible = false;
    bottle9.visible = false;
    bottle8.visible = false;
    bottle7.visible = false;
    bottle6.visible = false;
    bottle5.visible = false;
    bottle4.visible = false;
    bottle3.visible = true;
    bottle2.visible = true;
    bottle1.visible = true;
  }
  if (food == 2) {
    bottle10.visible = false;
    bottle9.visible = false;
    bottle8.visible = false;
    bottle7.visible = false;
    bottle6.visible = false;
    bottle5.visible = false;
    bottle4.visible = false;
    bottle3.visible = false;
    bottle2.visible = true;
    bottle1.visible = true;
  }
  if (food == 1) {
    bottle10.visible = false;
    bottle9.visible = false;
    bottle8.visible = false;
    bottle7.visible = false;
    bottle6.visible = false;
    bottle5.visible = false;
    bottle4.visible = false;
    bottle3.visible = false;
    bottle2.visible = false;
    bottle1.visible = true;
  }
  if (food == 0) {
    bottle10.visible = false;
    bottle9.visible = false;
    bottle8.visible = false;
    bottle7.visible = false;
    bottle6.visible = false;
    bottle5.visible = false;
    bottle4.visible = false;
    bottle3.visible = false;
    bottle2.visible = false;
    bottle1.visible = false;
  }
}