console.log("connected");

function game() {

    
    
    // these variables must be outside the scope of the onkeyup function
    var wins = 0;
    var losses = 0;
    
    function startRound() {
        
        var guesses = 10;
        var wrong = [];

        var letters = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // choose a letter from alphabet, store it to variable
        var randomLetter = "";
        var randomLetter = letters[Math.floor((Math.random() * 27)+1)];
        console.log("Random letter is " + randomLetter);


        // event listener for user guess, then lowercases it to match array data
        document.onkeyup = function (e) {
            var guess = e.key.toLowerCase();
            console.log("you guessed " + guess);


            // gateway: if your guess is a valid letter
            if (letters.includes(guess)) {
                console.log("guess is a valid letter");

                // conditional for answer check 
                if (guess === randomLetter) {

                    guesses= 11;
                    wins++;
                    wrong = "";
                    document.querySelector('.guessed-letters').innerText = "";
                    document.querySelector('.wins').innerText = wins;
                    document.querySelector('.answer-p').innerText = guess;
                    startRound();
                }

                // adding wrong guesses to array and preventing repeats
                if (wrong.indexOf(guess) === -1) {
                    wrong.push(guess);

                    // after all guesses are used, add to loss and restart;
                    if (wrong.length === 10) {
                        losses++;
                        document.querySelector('.losses').innerText = losses;
                        guesses = 11;
                        wrong = [];
                        startRound();
                    }
                    document.querySelector('.guessed-letters').innerText = wrong;
                    console.log("wrong guess, subtracting 1");
                    guesses--;
                    document.querySelector('.guesses').innerText = guesses;

                }

            }
        }
    }

    startRound();
}
    game();

// }


// call function on page load
// psychicGame();












