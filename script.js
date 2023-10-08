let randomNumber = Math.floor(Math.random() * 100 + 1);
let guesses = 0;

document.getElementById('submitbtn').onclick = function() {
  let guess = parseInt(document.getElementById('guessfield').value);

  let invalid = "Please enter a valid number between 1 and 100.";

  if (isNaN(guess) || guess < 1 || guess > 100) {
    displayResult(invalid);
    return;
  }

  guesses += 1;

  let correct = `Congratulations! The correct number is ${randomNumber}, and you guessed it in ${guesses} attempts.`;

  let low = "Too low! Try again.";

  let high = "Too high! Try again.";

  if (guess === randomNumber) {
    displayResult(correct);
    resetGame();
  } else if (randomNumber > guess) {
    displayResult(low);
  } else {
    displayResult(high);
  }
}

function displayResult(message) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = message;

  // Display the message for 3 seconds (3000 milliseconds)
  resultElement.style.display = "block";
  setTimeout(function() {
    resultElement.style.display = "none"; // Hide the message
  }, 1000);
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  guesses = 0;
  document.getElementById('guessfield').value = '';
}
