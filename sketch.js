var database, gs = 0, pc, allP;
var form, player, game;
var car1, car2, car3, car4, cars;
function setup(){
    createCanvas(displayWidth,displayHeight);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
   if(pc === 4){
       game.update(1);
   }
   if(gs === 1) {
       clear();     //clears the canvas
       game.play();
   }
}




/*
Object Oriented Programming (OOP)

1. Form
    - input box
    - play button
    - button pressed - player name --> database
                     - New player created

2. Player
    - info (name, distance, rank)
    - player count (Read & write into the database)

3. Game
    - gameStates
        - WAIT (0) - form (lobby)
        - PLAY (1)
        - END (2)
    - Read & write gamestate into the database

*/