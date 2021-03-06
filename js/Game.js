class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    //cars

car1 = createSprite((displayHeight/2));
car1.addImage("red",ship1);
car1.scale=2;

car2 = createSprite((displayHeight/2));
car2.addImage("green",ship2);
car2.scale=2;

car3 = createSprite((displayHeight/2));
car3.addImage("red2",ship3);
car3.scale=2;

car4 = createSprite((displayHeight/2));
car4.addImage("blue",ship4);
car4.scale=2;

cars = [car1,car2,car3,car4];

}





play(){
    form.hide();
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
       background("#c68767");
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 450;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;

        //use data form the database to display

         y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
            stroke("black")
            fill("red")
            ellipse(x,y,90,90);

          cars[index - 1].shapeColor = "white";  

          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    
    if(player.distance>5000)
    {
     gameState = 2
    }
    drawSprites();
  }
end()
{
  console.log("Game End...")
}
}