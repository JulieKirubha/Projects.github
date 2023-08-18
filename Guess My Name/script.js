'use strict';

// Class = 1
console.log(
  (document.querySelector('.message').textContent = 'Start Guessing...')
);

// Check Button
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When Wrong Num
  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    displayMessage('💥Correct Number');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When Wrong Number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭You lost the Game!!!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
  displayNumber('?');
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
});
