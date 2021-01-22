var player;

const bit = [];
const rock = [];
let rockcreated = false;

var score = 0;
var timer = 10;

function setup() {
  createCanvas(800, 500);

  player = new Player();

  bit.push(new Bit(random(100, 700), random(100, 400))); 
};

function draw() {
  background(55);  
  rectMode(CENTER);
  noStroke();

  for(var i = 0; i < bit.length; i++){
    bit[i].show();
    bit[i].update(player);
  }

  for(var i = 0; i < rock.length; i++){
    rock[i].show();
    rock[i].update(player);
  }

  if(score % 10 === 0 && score > 0 && rockcreated === false){
    rock.push(new Rock(random(100, 700), random(100, 400)));
    rockcreated = true;
  }else {
    if(frameCount % 60 === 0 && score % 11 === 0)
    rockcreated = false;
  }

  if(timer > 0){
    fill(255);
    textSize(36);
    text('score: ' + score, 20, 50);
    text(timer, 20, 480);

    if(frameCount % 60 === 0){
      timer--;
    }
    player.visible = 255;
    player. control();
  }else {
    end();
  }

  player.show();
  player.update();
};


function end(){
  if(timer === 0){
    player.visible -= 3;

    fill(255);
    rect(400, 250, 400, 250);
    fill(0);
    textSize(36);
    text('Game Over', 310, 180);
    textSize(40);
    text('score: ' + score, 330, 300);
  }


}