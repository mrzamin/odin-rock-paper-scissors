/* Write a function called getComputerChoice that randomly selects rock, paper, or scissors for the computer and prints to console.*/

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    const computerChoice = console.log(choices[Math.floor(Math.random() * choices.length)]);
}

/* Write a function that plays a single round of RPS. */
const input = "rock";
const playerSelection = input.toLowerCase();
const computerSelection = getComputerChoice();
playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        result = "Rock and rock...You tied!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "Paper beats rock! You lose.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "Rock beats scissors. You win!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        result = "Paper and paper. You tied!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "Paper beats rock. You win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "Scissors beats paper. You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = "Scissors and scissors. You tie!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "Rock beats scissors. You lose!";
    } else {
        result = "Scissors beats paper. You win!";
    }
    return result;
}