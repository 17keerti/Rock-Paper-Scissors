alert("Let's play Rock Paper Scissors Game ");

var wins = 0;
var losses = 0;
var ties = 0;

var playGame = function() {
  var playerChoice = window.prompt("Pick R, P, or S:");

  if (!playerChoice) {
    return; 
}

playerChoice = playerChoice.toLowerCase(); 

var rps = ["R", "P", "S"];


  var index = Math.floor(Math.random() * rps.length);
  var chooseComputer= rps[index];


window.alert("The computer picked " + chooseComputer);

if (playerChoice === chooseComputer) {
  ties++; 
  window.alert("It's a tie! Try again."); 
}

else if (
  (playerChoice === "R" && chooseComputer === "S") ||
  (playerChoice === "P" && chooseComputer === "R") ||
  (playerChoice === "S" && chooseComputer === "P") 

) {
  wins++;
  window.alert("Congrats! You won $$");
}

else {
  losses++;
  window.alert("Sorry! You lost :( "); 
}

window.alert(
  "Scoreboard:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties 
);

// var replay = window.alert("Would You Like To Play Again?"); 

if(replay) {
   playGame();
}
}; 

playGame (); 
