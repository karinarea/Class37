class Game{
    constructor(){}
    // to read gamestate from database
    getState(){
        var gsRef = database.ref("gameState");
        gsRef.on("value", function(data){   //local function
            gs=data.val();
        });
    }
    
    //to write gamestate into the database
    update(state){
        database.ref("/").update({
            gameState: state
        });
    }


    //WAIT STATE
    async start(){
        if(gs === 0){
            //new player object
            player = new Player();
            //Read the playercount from database
            var dataref = await database.ref("playerCount").once("value");
            if(dataref.exists()) {
                pc = dataref.val();
                player.getCount();
            }
            //Form object
            form = new Form();
            //form is displayed
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1, car2, car3, car4];
    }

    play(){
        form.hide();
        
        Player.getPlayerInfo();
        if(allP !== undefined) {    //GAME STARTS
            
            var carIndex = 0;
            var x = 0;
            var y;
            for(var i in allP) { //i=0, carIndex=0; i<4, carIndex<4; i++, carIndex++
                carIndex++;
                x = x + 200;
                y = displayHeight - allP[i].Distance;
                cars[carIndex - 1].x = x;
                cars[carIndex - 1].y = y;
                
                //Identifying currently active player/car
                if(carIndex === player.index) {
                    cars[carIndex - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carIndex- 1].y;
                }
                
                
            };
        }
        if(keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance + 50;
            player.update();
        }
        drawSprites();
    }
}

/*
"/" - refers to the main database

for(var i = 0; i < length; i = i + 1){}
for/in loop statement
    for(var i in array){}

    for (var i in object){}

*/
