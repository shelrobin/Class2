var carrotGrid = [];

function setup() {
  createCanvas (400,400);
}
function draw() {
  noStroke();
  fill(color(0,100,255));
  rect(0,0,400,50);
  fill('rgb(0,170,0)');
  rect(0,50,400,350);
  myFavorite.drawCarrot();
  otherCarrot.drawCarrot();
  bunny();

  if (mouseIsPressed){
  if(dist(myFavorite.carrotX,myFavorite.carrotX,mouseX,mouseY)<100){
    myFavorite.doesExist=false;
  }  
  }
  if (mouseIsPressed){
  if(dist(otherCarrot.carrotX,otherCarrot.carrotX,mouseX,mouseY)<100){
    otherCarrot.doesExist=false;
}
}
}
var myFavorite = new Carrot(100, 100);
var otherCarrot = new Carrot(300,300);

function Carrot (x,y){
  this.doesExist=true;
    this.carrotX=x;
    this.carrotY=y;

  this.drawCarrot = function (){
    if (this.doesExist===true) {
    noStroke();
    fill('rgb(0,200,0)');
    triangle(x-17,y-55,x+17,y-55,x,y-30);
    triangle(x-16,y-50,x+16,y-50,x,y-30);
    triangle(x-15,y-45,x+15,y-45,x,y-30);
    fill(255,150,0);
    triangle(x+10,y-30,x-10,y-30,x,y+20);
  }
}
}


function bunny (){
  fill(240); //belly
  ellipse(mouseX,mouseY+20,100,90);
  fill(255); //white ears
  ellipse(mouseX-60,mouseY-30,15,70);
  ellipse(mouseX-40,mouseY-30,15,70);
  fill('#fae'); //pink ears
  ellipse(mouseX-60,mouseY-30,7,40) ;
  ellipse(mouseX-40,mouseY-30,7,40);
  fill(255);
  ellipse(mouseX-50,mouseY,50,50); //head
  ellipse(mouseX+50,mouseY-5,20,20); //tail
  fill('#fae');
  triangle (mouseX-50,mouseY+6,mouseX-45,mouseY,mouseX-55,mouseY); //nose
  fill(0); //eyes
  ellipse(mouseX-60,mouseY-10,5,5);
  ellipse(mouseX-40,mouseY-10,5,5);
  noFill();
  stroke(1);
  arc(mouseX-50,mouseY+10,10,10,0,PI);
  line(mouseX-50,mouseY+5,mouseX-50,mouseY+14);
}
