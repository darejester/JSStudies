//import functions to be used
import { guessNumber, setNumber } from "./guessing_game_module.js";

// Set the number to be guessed
setNumber();

//add an event listener to guessButton, so that itll call guessNumber when it's clicked
const guessButton = document.getElementById('guessButton');
    guessButton.addEventListener('click', guessNumber);



