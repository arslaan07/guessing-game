document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn");
    const wrng = document.querySelector(".wrng");
    const guesses = document.querySelector(".guesses");
    const input = document.getElementById("input");

    let answer = Math.floor(Math.random() * 100) + 1;
    let numOfGuesses = 0;

    btn.addEventListener("click", ()=> {
        const input = document.getElementById("input").value;
        guessesNumber();
    });

    function guessesNumber() {
        if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
            wrng.innerHTML = "Enter a number between 1 and 100!";
        } else {
            numOfGuesses++;
            guesses.innerHTML = "No. of Guess : " + numOfGuesses;
            if (input.value > answer) {
                wrng.innerHTML = "You guessed too high!";
            } else if (input.value < answer) {
                wrng.innerHTML = "You guessed too low!";
            } else {
                wrng.innerHTML = "Congratulations! " + answer + " is the correct answer!";
                setTimeout(()=> {
                    resetGame();
                },5000);
            }
            input.value = "";
        }
    }
    function resetGame() {
        wrng.innerHTML = "";
        guesses.innerHTML = "No. of Guess : 0";
        answer = Math.floor(Math.random() * 100) + 1;
        numOfGuesses = 0;
    }
});
