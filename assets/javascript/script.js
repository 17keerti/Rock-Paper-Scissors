//initialize variables starting from 0
var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var rps = ["R", "P", "S"];

var playGame = function() {
  // Ask user for their choice
  var playerChoice = prompt("Enter R, P, or S:");

  // If user pressed Cancel, immediately end function
  if (!playerChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  playerChoice = playerChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * rps.length);
  var computerChoice = rps[index];

  alert("The computer chose " + computerChoice);

  // If choices are the same, it's a tie
  if (playerChoice === computerChoice) {
    ties++;
    alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (playerChoice === "R" && computerChoice === "S") || 
    (playerChoice === "P" && computerChoice === "R") || 
    (playerChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();
