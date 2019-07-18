console.log("connected");

var wins =0;
var losses = 0;
var guesses = 10;
var random = "";
var answer = "";
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wrong = [" "];

document.querySelector('.wins').innerText = wins;
document.querySelector('.losses').innerText = losses;
document.querySelector('.guesses').innerText =  guesses;
document.querySelector('.guessed-letters').innerHTML = wrong;
var answer = document.querySelector('.answer');

// function to choose a letter from alphabet, store it to variable
 function psychicGame() {
        var random = letters[Math.floor(Math.random() * 27)];
        console.log(random);
        }
// call function on page load
        psychicGame();

// event listener for user guess including conditionals

        document.onkeyup = function(e) {
            var guess = e.key.toLowerCase();
        console.log("you guessed " + guess);
            // conditional for verifying that is a letter and determining if it was guessed already

            if (letters.includes(guess)) {
                console.log("guess is a valid letter");

            // conditional for answer check comparison
                        if (guess === random) {
                            console.log("Correct guess");
                            wins++;
                            answer.innerText = guess;
                        }   
    
                    if (guess !== random) {
                        
                        if (wrong.indexOf(guess) === -1) {
                            wrong.push(guess);
                            console.log("wrong guess, subtracting 1")
                            guesses--;
                            console.log("guesses--;")
        
                            if(wrong.length === 9) {
                                losses++;
                                guesses=10;
                                wrong = [""];
                                console.log("losses++;")
                                psychicGame();
                            }
                        }
                    }
                }

            }



                
            
         

    






