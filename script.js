// LOGIC 1 - GET THE NUMBERS
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// camelCase
// lOGIC 2 - MATCH THE NUMBERS
// logic for function
// i change the message tp be displayed according to the score
function displayMessage(msg) {
    document.querySelector('.message').textContent = msg;
}


document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
if (!guess) {
    displayMessage('Invalid input');
} else if (guess == secretNumber) {
    displayMessage('You won');
} else if (guess < secretNumber) {
    displayMessage('Too low');
} else {
    displayMessage('Too high');
}
});