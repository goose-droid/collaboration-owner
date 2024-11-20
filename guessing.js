const form = document.querySelector("form");
const input = document.querySelector("#guess");
const guessCount = document.querySelector("#prevGuesses");
const result = document.querySelector("#result");

const resetButton = document.createElement("button");
resetButton.textContent = "Start new game";
resetButton.style.fontSize = "x-large";

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;


function finishGame() {

    input.setAttribute("disabled", true);

    document.querySelector("body").append(resetButton);
    resetButton.focus();

}

function resetGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;
    input.removeAttribute("disabled"); 
    resetButton.parentNode.removeChild(resetButton); 
    guesses = 0;
    guessCount.textContent = null;
    result.textContent = null;
    result.classList.remove("justRight");
    result.classList.remove("tooMany");
    input.focus();

 }

function checkGuess() {

    let userGuess = Number(guess.value);

    //removes result class from previous guesses
    result.classList.remove("justRight");
    result.classList.remove("tooSmall");
    result.classList.remove("tooBig");
    result.classList.remove("tooMany");

    //increments guesses counter
    guesses ++;

    //checks if first guess to add prev guesses text
    if (guesses === 1) {
        guessCount.textContent = `Previous guesses: `;
    }; 
    
    //checks the three possible conditions and displays proper message
    if (userGuess === randomNumber) {
        guessCount.textContent += ` ${userGuess}`;

        //Congrats message
        result.textContent = "Congratulations! You got it right!";
        result.setAttribute("class", "justRight");
        finishGame();

    } else if (guesses < 10) {

        guessCount.textContent += ` ${userGuess}`;

        if (userGuess < randomNumber) {
            //Guess too low message
            result.textContent = "WRONG, that guess was too small";
            result.setAttribute("class", "tooSmall");

        } else {
            //Guess too high message
            result.textContent = "WRONG, that guess was too BIG";
            result.setAttribute("class", "tooBig");
        };

    } else {
        guessCount.textContent += ` ${userGuess}`;
        //too many guesses message
        result.textContent = "!!! Too many attempts, GAME OVER !!!";
        result.setAttribute("class", "tooMany");
        finishGame();
    };
};

form.addEventListener("submit", e => {   
    e.preventDefault();  
    checkGuess();
    form.reset();
})

resetButton.addEventListener("click", () => {
    resetGame();
});

