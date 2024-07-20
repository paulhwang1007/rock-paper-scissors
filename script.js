console.log("hello world");
// The Problem: We want to be able to play rock paper scissors
// it will be played entirely in the console so doesn't involve much HTML

// Plan: 
// There is no user interace, it all happens in the console
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

// Solving Fizz Buzz

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
function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, or Scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors";
    }
}

// Logic to play a game (5 rounds)
function playGame() {

// Keep track of the score
let humanScore = 0;
let computerScore = 0;

// Logic to play a single roud
function playRound(humanChoice, computerChoice) {

    if (computerChoice.toLowerCase() === "rock") {
        if (humanChoice.toLowerCase() === "paper") {
            ++humanScore;
            console.log("You win! Paper beats Rock!");
        } else if (humanChoice.toLowerCase() === "scissors") {
            ++computerScore;
            console.log("You lose! Rock beats Scissors!");
        } else {
            console.log("Tie! Play Again!");
        }
    }

    if (computerChoice.toLowerCase() === "paper") {
        if (humanChoice.toLowerCase() === "scissors") {
            ++humanScore;
            console.log("You win! Scissors beats Paper!");
        } else if (humanChoice.toLowerCase() === "rock") {
            ++computerScore;
            console.log("You lose! Paper beats Rock!");
        } else {
            console.log("Tie! Play Again!");
        }
    }

    if (computerChoice.toLowerCase() === "scissors") {
        if (humanChoice.toLowerCase() === "rock") {
            ++humanScore;
            console.log("You win! Rock beats Scissors!");
        } else if (humanChoice.toLowerCase() === "paper") {
            ++computerScore;
            console.log("You lose! Scissors beats Paper!");
        } else {
            console.log("Tie! Play Again!");
        }
    }
    return console.log(`Human Score: ${humanScore}; Computer Score: ${computerScore}`);
}

let humanSelection1 = getHumanChoice();
let computerSelection1 = getComputerChoice();
let humanSelection2 = getHumanChoice();
let computerSelection2 = getComputerChoice();
let humanSelection3 = getHumanChoice();
let computerSelection3 = getComputerChoice();
let humanSelection4 = getHumanChoice();
let computerSelection4 = getComputerChoice();
let humanSelection5 = getHumanChoice();
let computerSelection5 = getComputerChoice();


playRound(humanSelection1, computerSelection1);
playRound(humanSelection2, computerSelection2);
playRound(humanSelection3, computerSelection3);
playRound(humanSelection4, computerSelection4);
playRound(humanSelection5, computerSelection5);

}

playGame();