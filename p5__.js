function setup() {
createCanvas(800,800);
background(0);

}

function draw() {
 r=random(255);
g=random(255);
b=random(255);

  if(mouseButton==LEFT){
    background(255,0,0);
    
  
  }
 
  if(mouseButton==RIGHT){
    background(0,255,0);
  }
  
drawL();
drawO();
drawV();
drawE();


}

function drawL(){
  //L
  
fill(0);
  rect(0,0,300,40);
  rect(40,0,140,400);
  triangle(40,400,360,400,40,180);
  triangle(360,400,400,400,400,300);
 
}

function drawO(){
   //O

stroke(0);
fill(0);
  ellipse(600,200,400,400);
  fill(r,g,b);
  ellipse(600,200,200,350);
}

function drawV(){
  //v 
stroke(0);
fill(0);
 rect(0,400,200,30);
 rect(250,400,150,30);
 quad(30,400,150,400,240,650,130,800);
 quad(320,400,370,400,220,800,130,800);
  
}

function drawE(){
  //E
stroke(0);
fill(0);
rect(400,400,400,30);
rect(400,750,400,50);
rect(450,400,100,400);
rect(550,570,100,50);
triangle(700,400,800,400,800,550);
triangle(650,800,800,800,800,700);
quad(650,570,700,500,700,700,650,620);
}

function color(){
   r=random(255);
g=random(255);
b=random(255);
}
