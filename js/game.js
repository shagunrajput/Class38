class Game{
    constructor(){
    

    }
// getting gamestate from database
    getState(){
        var gamestateref= database.ref('gameState');
        gamestateref.on("value",function(data){
            mygamestate=data.val();
        }
        )
    }

    //updating the database
    update(state){
    database.ref('/').update({
        gameState:state 
    })

  }
  async start(){
    if(mygamestate === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        myplayercount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
      
    }

    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);

    cars=[car1,car2,car3,car4];
  }


play(){
    form.hideElements();
   /* textSize(30);
    text("GAME START",120,100);*/
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
        //var display_position=130;
        var index=0;
        var x=0,y;
        for(var plr in allPlayers){

            index=index+1;
            x=x+200;
            y=displayHeight-allPlayers[plr].Distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index===player.index){
                cars[index-1].shapeColor="red";

                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
            }
                    
                /*display_position=display_position+20;
                textSize(15);

                text(allPlayers[plr].Name+":  "+allPlayers[plr].Distance,120,display_position);*/
                


        }

        if(keyIsDown(UP_ARROW) && player.index !==null){
            player.distance=player.distance+50;

            player.update();

        }



    }







}


}