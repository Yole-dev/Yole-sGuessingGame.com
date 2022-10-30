'use strict';

//.textContent keyword brings out the the text in a specified element.
/* 
DOM: The DOM(Document Object Model) is a structured representation of HTML Documents.
It allows JavaScript to access HTML Elements and Styles to manipulate them.
i.e change text, HTML attributes, and even CSS styles.

DOM is part of the web APIs and these are web libraries that are written in JavaScript
that can be used anytime.
*/

//selecting and manipulating elements
console.log(document.querySelector('.message').textContent);

//.textContent can also be used to change the text in an element.
/* document.querySelector('.message').textContent = 'Correct Number 🐱‍🏍🐱‍🏍🐱‍🏍';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20; */

/* .value keyword gets the exact value of the specified element
and you can also use it to manipulate the value of an element */
/* document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

//Event Listener: CLICK EVENTS

//.addEventListener('type of event', function() {state what you want to happen when the event happens}) method
// always let your data to be available in your code.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//a state variable 
let score = 20;
let highScore = 0;

//refactoring code
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess =  Number(document.querySelector('.guess').value);

    //implementing game logic

    //When there is no input/guess
    if (!guess) {
        displayMessage(`❌ No number!`);
        //When player wins
    } 
     else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

       //manipulating the CSS styles
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //setting the highscore
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //when guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

            //this decreases the score whenever the player guesses wrong.
            score--;
            // document.querySelector('.score').textContent = score;
            displayScore(score);
        } else {
            // document.querySelector('.message').textContent = 'you lost the game! 💥';
            displayMessage(`you lost the game! 💥`);
            // document.querySelector('.score').textContent = 0;
            displayScore(0);
        }
       //When the guess is greater than the secretNumber
    }
     
    /*
     else if (guess > secretNumber) {
        // an if statement can exist inside an else if statement
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too high!';
            //this decreases the score whenever the player guesses wrong.
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost the game! 💥';
            document.querySelector('.score').textContent = 0;
        }


       //When the guess is lower than the secretNumber 
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!';
            //this decreases the score whenever the player guesses wrong.
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'you lost the game! 💥';
            document.querySelector('.score').textContent = 0;
        }
    }; */

});

//coding challenge restarting the game by restoring previous values.
document.querySelector('.again').addEventListener('click', function() {
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.score').textContent = score;
    displayScore(score);
    document.querySelector('.guess').value = ``;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.message').textContent = 'Start guessing....';
    displayMessage(`Start guessing...`);
    document.querySelector('.number').textContent = '?';
});