class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    //Reads playercount from database
    getCount() {
        var count = database.ref("playerCount");
        count.on("value", (data)=>{ //permanent listener
            pc=data.val();
         })
    }


    //updates playercount into the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }


    //update the player info (name)
    update(){
        database.ref("players/player" + this.index).set({
            Name: this.name,
            Distance: this.distance
        });
    }

    static getPlayerInfo(){
        var info = database.ref("players");
        info.on("value", (data)=>{
            allP=data.val();
        })
    }
}

/*
Static Functions:
    - common functions for all the objects of the class
    - Called by the class
    - Not called by any specific object

players/player

players:
    player1:
        name
        distance
    player2:
        name
        distance
    player3
    player4
*/