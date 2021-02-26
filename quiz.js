class Quiz {
    constructor() {

        var getState = database.ref(`gameState/value`);
        getState.on("value");
    }
  
async start(){
   

    if (gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref(`contestantCount`).once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
        question = new Question();
        question.display();
    }
}

 play(){
    input1.hide();
    option1.hide();  
    option2.hide();
    question.hide();
    title.hide();
    background("yellow");
    for(var plr in allContestants){
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("Green");
        else 
          fill("Red");
    textSize = 4;  
    contestant.getContestantInfo();

    if(allContestants !== undefined){
        var index = 0;
      var x = 100;
      var y;
     // for(var plr in allContestants){
       // index = index + 1;
        //x = x + 200;
        //y = displayHeight - allContestants[plr].distance;
        //cars[index - 1].x = x;
        //cars[index - 1].y = y;
        //if (index ===  player.index){
          //camera.position.x = displayWidth/2;
          //camera.position.y = cars[index - 1].y;
        //}
    //}
    }
    //display_correctAns+=20;
      //  textSize(15);
        //text(allContestants[plr].name + ": " + allContestants[plr].correctAns, 120,display_position)
    }

   //for(correctAns === )


}
}