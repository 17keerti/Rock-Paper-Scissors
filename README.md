#  Mini-Project: Rock, Paper, Scissors

In this activity, we worked as a pair to build a Rock, Paper, Scissors game using only JavaScript.

## Instructions

The completed application should meet the following criteria:

* As a user, I want to play Rock, Paper, Scissors against an automated opponent.

* As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

* As a user, I expect the computer to choose R, P, or S in return.

* As a user, I want the option to play again whether I win or lose.

* As a user, I want to see my total wins, ties, and losses after each round.

### Specifications

* Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.

* The computer's selection must be random to ensure a fair game.

## What have we done on JavaScript file
 
 Step 1: we initialized variables starting from 0.
 Step 2: we created an array of options for computer to pick from.
 Step 3: we created a function to prompt user to enter their choice, R, P, or S.
 Step 4: we created a conditional statement for when user pressed Cancel, function will end immediately.
 Step 5: we converted the input of R, P, or S to uppercase so comparisons are easier. 
 Step 6: we used the Math.random function, to get random indext from array of options for the computer.
 Step 7: we created the Window.alert() message to show user what the computer has chosen.
 Step 8: we created a conditional statement to show the user the alert message "It's a tie!" when both computer and user made the same choices.
 Step 9: we created more conditional statements with Binary logical operators and equality operators to check every win condition for the player. there will be an alert message telling user "You win!".
 Step 10: we created another conditional statement to assume the player has lost, if above conditions failed. It will show alert message "You lost!".
 Step 11: we created a window alert showing the Total Wins, Losses and Ties.
 Step 12: we declared a window.confirm() function to ask user if they want to play again. 
 Stpe 13: we declared the conditional statement to run the game function again if user pressed on OK.
 sTEP 14: lastly, we declared the last function to run the game for the first time by repeating Step 3's function. 

Refer to the documentation:

* [MDN Web Docs on window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

* [MDN Web Docs on window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

* [MDN Web Docs on window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

* [MDN Web Docs on Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your pair to further your knowledge:

* How can you customize the appearance of the `alert()`, `confirm()`, and `prompt()` dialog boxes?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

