var targetWord = "mango";
let message = document.getElementById("message");

function checkGuess() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value.toLowerCase();

    if (guess === targetWord) {
        message.textContent = "Congratulations! You guessed the word correctly!";
    } else {
        message.textContent = "Sorry, that's not correct. Keep guessing! (Do you want hint? press 9)";
    }
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
}


function handleKeyDown(event) {
    if (event.key === "9") {
        hint.textContent = "Hint : for summer";
    }
}

