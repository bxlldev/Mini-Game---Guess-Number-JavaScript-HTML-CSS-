"use strict";

//pls enjoy :)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Refactoring duplicate code
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    displayMessage("🚫 No number!");
  }
  //When player won the game
  else if (guess === secretNumber) {
    displayMessage("🥳 Correct Number! ");

    //Visible secret number after won the game
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Record High score
    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High! " : "📉 Too Low! ");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the the game! ");

      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "rgb(187, 68, 68)";
    }
  }
});

//Reset button
document.querySelector(".again").addEventListener("click", function () {
  // Restore all info to the beginning
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing... ");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
