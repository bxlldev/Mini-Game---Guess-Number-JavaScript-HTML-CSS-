'use strict';
/*
//Select Class >> using .classname
//Select ID >> using #IDname

//DOM: Document Object Model >> Using JavaScript to manipulate HTML and CSS

//document.querySelector('Select what ever element you want like CSS', .textContent mean read the context for selected element)

//document.querySelectorh('Element')
console.log(document.querySelector('.message').textContent);

// set the content
document.querySelector('.message').textContent = '🥳 Correct Number! ';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//get value from input
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

////////////////// GAME Logical /////////////////////
// click button (Event)

// Math.random() >> Random number,
// - need Math.trunc() to get interger
// - need to *20 for random the decimal number btw 0 to 20
// - need to +1 caues, Default random number start from 0 to 20, so we need start from 1 to 20, that why we + 1

//.addEventListener >> adding the event after execute the button

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

//Refactoring duplicate code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No number! ';
    displayMessage('🚫 No number!');
  }
  //When player won the game
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number! ';
    displayMessage('🥳 Correct Number! ');

    //Visible secret number after won the game
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // Record High score
    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too High! ' : '📉 Too Low! ';

      displayMessage(guess > secretNumber ? '📈 Too High! ' : '📉 Too Low! ');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '💥 You lost the the game! ';

      displayMessage('💥 You lost the the game! ');

      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'rgb(187, 68, 68)';
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

///////////////////////////////////////////////////////////
// Coding Challenge #1

/*

Implement a game rest functionality, so that the player can make a new guess! Here is how:

1.Select the element with the 'again' class and attach a click event handler

2.In the handler function, restore initial values of the score and Secretnumber variables

3.Restore the initial conditions of the message, Secretnumber, score and guess input field

4.Also restore the original background color (#222) and number width (15rem)

*/

document.querySelector('.again').addEventListener('click', function () {
  // Restore all info to the beginning
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = 'Start guessing... ';

  displayMessage('Start guessing... ');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

// Refactoring duplicate code
