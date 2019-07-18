console.log("connected");

var wins =0;
var losses = 0;
var guesses = 10;
var random = "";
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var guessed = [" "]

document.querySelector('.wins').innerText = wins;
document.querySelector('.losses').innerText = losses;
document.querySelector('.guesses').innerText =  guesses;
document.querySelector('.guessed-letters').innerHTML = guessed;


// function to choose a letter from alphabet, store it to variable
 function psychicGame() {
        var random = letters[Math.floor(Math.random() * 27)];
        console.log(random);
        }
// call function on page load
        psychicGame();

// event listener for user guess including conditionals

        var guess= document.onkeyup = function(e) {
            e.key.toLowerCase();
        
// conditional for guessed array, checking to see if it is already inside

            if (guessed.indexOf(guess) === -1) {
                guessed.push(guess)
            }

// conditional for answer check 

            if (letters.includes(guess)){
                if (guess !== random) {
                guesses--;
                guessed.push(guess);
            }
        }
    }






