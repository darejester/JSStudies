var randomNumber;


export function guessNumber() {
    console.log(randomNumber);
    const userGuess = parseInt(document.getElementById("guessInput").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("result").textContent = "Please enter a valid number between 1 and 100.";

    } else if (userGuess === randomNumber) {
        document.getElementById("result").textContent = "Congratulations! You guessed the correct number.";
        //set new number to guess
        setNumber();

    } else if (userGuess < randomNumber) {
        document.getElementById("result").textContent = "Too low. Try again.";

    } else {
        document.getElementById("result").textContent = "Too high. Try again.";
    }
}

export function setNumber(){
    console.log("setNumber called");

    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}