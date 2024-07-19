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
function getComputerchoice() {
    number = Math.random()
    if (number <= (1/3)) {
        return "Rock";
    } else if (number <= (2/3)) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerchoice());

// Getting the Human Choice
function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, or Scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getHumanChoice());