class Quiz {
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    hide()
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
    
      
        this.title.html("Car Racing Game");
        this.title.position(400,400);

   for(var plr in allContestants){
     var correctAns = "2";
     if(correctAns === allContestants[plr].answer)
     fill("green");
     else
     fill("red");
   }

    


    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*NOTE:Contestent who answered correct are highlighted in green color!",130,230)
    }
    
  }

}
