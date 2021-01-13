var box;

function setup(){
 createCanvas(600,600)
 box=createSprite(300,200,30,30);
}

function draw(){
background(0);
if (keyDown("up")){
changePosition(0,-2);
}
if (keyDown("down")){
    changePosition(0,2);
}
if (keyDown("left")){
    changePosition(-2,0);
}
if (keyDown("right")){
    changePosition(2,0);
}
drawSprites();
}

function changePosition(x,y){
    box.x=box.x+x;
    box.y=box.y+y;
}
