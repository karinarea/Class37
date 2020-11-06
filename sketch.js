var ball, database, position;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    var ballpos = database.ref("Ball/Position");
    ballpos.on("value",);
   
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/Position").set({
        x:position.x +x,
        y:position.y + y
    });
   
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function Read (data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function error () {
    console.log("error");
}


/*
.ref() ==> Refers to the location of the database value that we want

.on() ==> READ ==> creates a listener that keeps listening to the changes in the database
          1. Reads the value that is being changed
          2. To show error if there is any problem while reading


.set() ==> WRITE ==> To change the value in the database

*/