var canvas;
var gameState = 0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;
var quiz1;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz1 = new Quiz();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    gameState.update(1);
  }

  if(gameState === 1){
    quiz.play();
  }

  getState();
  start();
}
