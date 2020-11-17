class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }
    

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){

        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2 - 50, 0);
       
        this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);
        
        this.button.position(displayWidth/2 + 40,displayHeight/2);
        
        this.button.mousePressed(

            ()=>{
                //Input & button gets hidden
                this.input.hide();
                this.button.hide();
                //Name of the player is stored & updated to the db
                player.name = this.input.value();
                //Pc increases & updated to db
                pc = pc + 1;
                player.index = pc;
                player.update();    //updating name to db
                player.updateCount(pc); //updating playercount to db

                //greeting is displayed
                this.greeting.html("hello "+ player.name);
                this.greeting.position(displayWidth/2 - 50,displayHeight/4);
            }

        );
        
    }

}

/*

ARROW Function
 - local functions
 - ()=>{}
 - Binds the "this" keyword to the object that calls it
*/