var box;

var block1;

var block2;

var block3;

var block4;

var block5;

function setup(){

    createCanvas(1500,600);

    box = createSprite(1475, 500, 20, 20);
    box.shapeColor = "rgb(225, 150, 90)";

    block1 = createSprite(1610, 585, 200, 30);
    block1.shapeColor = "blue";

    block2 = createSprite(1840, 585, 200, 30);
    block2.velocityX = -2;
    block2.shapeColor = "yellow";

    block3 = createSprite(2070, 585, 200, 30);
    block3.velocityX = -2;
    block3.shapeColor = "red";

    block4 = createSprite(2290, 585, 200, 30);
    block4.velocityX = -2;
    block4.shapeColor = "green";

    block5 = createSprite(2480, 585, 150, 30);
    block5.velocityX = -2;
    block5.shapeColor = "orange";

}

function draw() {

    background(rgb(169,169,169)); 
    
    createEdgeSprites();
    block1.x = Math.round(random(30, 100));
    block1.velocityX = -2;

    if(keyDown("space") && box.y >= 200){
        box.velocityY = -6;
    }

    //add gravity
    box.velocityY = box.velocityY + 0.5;

    //add condition to check if box touching surface and make it box

    if(isTouching(block1, box)){
        block1.shapeColor = "blue";
        box.bounceOff(block1);
        box.shapeColor = "blue";
    }

    else{
        block1.shapeColor = "blue";
        box.shapeColor = "rgb(225, 150, 90)";
    }

    if(isTouching(block2, box)){
        block2.shapeColor = "yellow";
        box.bounceOff(block2);
        box.shapeColor = "yellow";
    }

    else{
        block2.shapeColor = "yellow";
        box.shapeColor = "rgb(225, 150, 90)";
    }

    if(isTouching(block3, box)){
        block3.shapeColor = "red";
        box.bounceOff(block3);
        box.shapeColor = "red";
    }

    else{
        block3.shapeColor = "red";
        box.shapeColor = "rgb(225, 150, 90)";
    }

    if(isTouching(block4, box)){
        block4.shapeColor = "green";
        box.bounceOff(block4);
        box.shapeColor = "green";
    }

    else{
        block4.shapeColor = "green";
        box.shapeColor = "rgb(225, 150, 90)";
    }

    if(isTouching(block5, box)){
        block5.shapeColor = "orange";
        box.bounceOff(block5);
        box.shapeColor = "orange";
    }

    else{
        block5.shapeColor = "orange";
        box.shapeColor = "rgb(225, 150, 90)";
    }

    drawSprites();
}
