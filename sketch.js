var box,database,changePosition;

function setup(){
    database=firebase.database();
 createCanvas(600,600)
 box=createSprite(300,200,30,30);

 var boxposition= database.ref('box/position');
 boxposition.on("value",readPosition,showError);
}

function draw(){
background(0);
if (keyDown("up")){
   writePosition(0,-2);
}
if (keyDown("down")){
    writePosition(0,2);
}
if (keyDown("left")){
    writePosition(-2,0);
}
if (keyDown("right")){
    writePosition(2,0);
}
drawSprites();
}

function writePosition(x,y){
    database.ref('box/position').set({
        'x': position.x + x,
        'y' : position.y +y
    })
}

function readPosition(data){
    position = data.val();
    box.x=position.x;
    box.y=position.y;
}

function showError(){
    console.log("error");
}
