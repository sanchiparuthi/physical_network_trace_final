
let canvas;
let bug1= [];
let bugs = 70;
let pawpaw;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}


function preload(){
  insect = loadImage('scarlet_bluet.png');
  //pawpaw = loadImage('common_pawpaw.png');
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', -1);

 
  for (let i=0; i<bugs ; i++){
    bug1[i] = new Insects( random(width), random(height)); 
  }
  
  
}

function draw() {
  background(255);
  


  for (let i=0; i<bugs ; i++){
    bug1[i].body();
    bug1[i].move();
  }


}

class Insects{
  constructor (x,y){
    
    this.x = x;
    this.y = y;
}
  body(){
    
    
    imageMode(CENTER);
    image(insect, this.x,this.y,40,30);
  }
  
  move(){
    this.y= this.y+0.5;
    
    if (this.y > height){
      this.y=0;
    }
  }
 
  
  
}