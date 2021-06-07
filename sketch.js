var database;
var mygamestate=0;
var myplayercount=0;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;


function setup(){
    createCanvas(displayWidth-40,displayHeight-30);

    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
  if(myplayercount===4){
    game.update(1);


  }  
 if(mygamestate===1){
    clear();
    game.play();


 }  
}


