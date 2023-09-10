'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //#When there is no input
    if(!guess) {
        // document.querySelector(".message").textContent = "⛔ No number!";
        displayMessage('⛔ No number!');

        //#When the player wins
    }else if(guess === secretNumber) {
        // document.querySelector(".message").textContent = "Correct Number! 🎉";
        displayMessage('Correct Number! 🎉');
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.transition = 'all .5s';
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    //#When guess is wrong
    } else if (guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector(".message").textContent = guess > secretNumber ? " 📈 Too high!" : " 📉 Too low!";
            displayMessage(
              guess > secretNumber ? " 📈 Too high!" : " 📉 Too low!"
            );
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            // document.querySelector(".message").textContent = "💥 You lost the game!";
            displayMessage("☹️ You lost the game!");
            document.querySelector('.score').textContent = 0;
            document.body.style.backgroundColor = "maroon";
        }
    }
});

//#Reset everything
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})