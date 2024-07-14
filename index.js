let userWins = 0;
let computerWins = 0;

for (let i = 0; i < 5; i++) {
    let userguess = prompt("Rock, Paper or Scissors?").toLowerCase();
    let compGuess = Math.floor(Math.random() * 3) + 1;

    console.log(`Computer's guess: ${compGuess}`);

    if (userguess != "rock" && userguess != "paper" && userguess != "scissors") {
        console.log("Invalid Input");
        i--; // If invalid input, repeat the current round
    } else {
        if (compGuess == 1) { // Rock
            if (userguess == "rock") {
                console.log("Draw");
            } else if (userguess == "paper") {
                console.log("You win this round");
                userWins++;
            } else if (userguess == "scissors") {
                console.log("You lose this round");
                computerWins++;
            }
        } else if (compGuess == 2) { // Paper
            if (userguess == "rock") {
                console.log("You lose this round");
                computerWins++;
            } else if (userguess == "paper") {
                console.log("Draw");
            } else if (userguess == "scissors") {
                console.log("You win this round");
                userWins++;
            }
        } else if (compGuess == 3) { // Scissors
            if (userguess == "rock") {
                console.log("You win this round");
                userWins++;
            } else if (userguess == "paper") {
                console.log("You lose this round");
                computerWins++;
            } else if (userguess == "scissors") {
                console.log("Draw");
            }
        }
    }
}

console.log(`Final Score - User: ${userWins}, Computer: ${computerWins}`);

if (userWins > computerWins) {
    console.log("You are the overall winner!");
} else if (computerWins > userWins) {
    console.log("Computer is the overall winner!");
} else {
    console.log("It's a tie!");
}
