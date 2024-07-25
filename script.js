    // The Problem: We want to be able to play rock paper scissors
    // it will be played entirely in the console so doesn't involve much HTML

    // Plan: 
    // There is no user interface, it all happens in the console
    // We will add a graphical user interface (GUI) later
    // Inputs: rock, paper, scissors
    // Outputs: rock, paper, scissors; win, lose, tie
    // Given the inputs and outputs, we want to check which combinations
    // of rock, paper, and scissors result in win, lose, or tie

    // Pseudocode:
    // When a user inputs an option of either rock, paper, or scissors
    // Return a random output of either rock, paper, or scissors
    // Given the input and output, check what combinations results in a win, loss, or tie
    // Return the result
    // If the result is a tie, play again until the result is either a win or loss

    // Divide and Conquer

// Project: Rock Paper Scissors

// Getting the Computer Choice
function getComputerChoice() {
    number = Math.random()
    if (number <= (1/3)) {
        return "Rock";
    } else if (number <= (2/3)) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Getting the Human Choice
// function getHumanChoice() {
//     humanChoice = prompt("Rock, Paper, or Scissors?");
//     if (humanChoice.toLowerCase() === "rock") {
//         return "Rock";
//     } else if (humanChoice.toLowerCase() === "paper") {
//         return "Paper";
//     } else if (humanChoice.toLowerCase() === "scissors") {
//         return "Scissors";
//     }
// }

// Logic to play a game (5 rounds)
function playGame() {

    // Keep track of the score
    let humanScore = 0;
    let computerScore = 0;

    // Scoreboard
    const score = document.querySelector('.score');
    score.textContent = `Player Score: ${humanScore}; Computer Score: ${computerScore}`;
    
    // Result
    const result = document.querySelector('.result');
    result.textContent = '';

    // Logic to play a single roud
    function playRound(humanChoice, computerChoice) {

        if (computerChoice.toLowerCase() === "rock") {
            if (humanChoice.toLowerCase() === "paper") {
                ++humanScore;
                score.textContent = `Player Score: ${humanScore}; Computer Score: ${computerScore}`;
                result.textContent = "You win! Paper beats Rock!";
                // console.log("You win! Paper beats Rock!");
            } else if (humanChoice.toLowerCase() === "scissors") {
                ++computerScore;
                score.textContent = `Player Score: ${humanScore}; Computer Score: ${computerScore}`;
                result.textContent = "You lose! Rock beats Scissors!";
                // console.log("You lose! Rock beats Scissors!");
            } else {
                result.textContent = "Tie! Play Again!";
                // console.log("Tie! Play Again!");
            }
        }

        if (computerChoice.toLowerCase() === "paper") {
            if (humanChoice.toLowerCase() === "scissors") {
                ++humanScore;
                score.textContent = `Player Score: ${humanScore}; Computer Score: ${computerScore}`;
                result.textContent = "You win! Scissors beats Paper!";
                // console.log("You win! Scissors beats Paper!");
            } else if (humanChoice.toLowerCase() === "rock") {
                ++computerScore;
                score.textContent = `Player Score: ${humanScore}; Computer Score: ${computerScore}`;
                result.textContent = "You lose! Paper beats Rock!";
                // console.log("You lose! Paper beats Rock!");
            } else {
                result.textContent = "Tie! Play Again!";
                // console.log("Tie! Play Again!");
            }
        }

        if (computerChoice.toLowerCase() === "scissors") {
            if (humanChoice.toLowerCase() === "rock") {
                ++humanScore;
                score.textContent = `Player Score: ${humanScore}; Computer Score: ${computerScore}`;
                result.textContent = "You win! Rock beats Scissors!";
                // console.log("You win! Rock beats Scissors!");
            } else if (humanChoice.toLowerCase() === "paper") {
                ++computerScore;
                score.textContent = `Player Score: ${humanScore}; Computer Score: ${computerScore}`;
                result.textContent = "You lose! Scissors beats Paper!";
                // console.log("You lose! Scissors beats Paper!");
            } else {
                result.textContent = "Tie! Play Again!";
                // console.log("Tie! Play Again!");
            }
        }

        if (humanScore === 5) {
            result.textContent = "The Player Wins!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            result.textContent = "The Computer Wins!";
            humanScore = 0;
            computerScore = 0;
        }
        // return console.log(`Human Score: ${humanScore}; Computer Score: ${computerScore}`);
    }

    // // Loop playRound() 5 times
    // for (let i = 0; i < 5; i++) {
    //     playRound(getHumanChoice(), getComputerChoice());
    // }

    const rockBtn = document.querySelector("#rockBtn");
    const papBtn = document.querySelector("#papBtn");
    const sciBtn = document.querySelector("#sciBtn");

    rockBtn.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    })

    papBtn.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    sciBtn.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });
}

playGame();

