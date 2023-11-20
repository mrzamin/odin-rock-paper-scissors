//Set up global variables.
const choices = ["rock", "paper", "scissors"];
const winners = [];
// Write a function called getComputerChoice that randomly selects rock, paper, or scissors for the computer and prints to console.*/
function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)];
}
//Write a function called playerChoice that allows the player to pick R P or S.
function playerChoice () {
    let input = prompt("Rock, paper, or scissors.");
    input = input.toLowerCase();
    console.log(input);
    return input;
}

// Write a function that displays the winner.
function playRound (round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const winner = checkWinner (playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
    logRound (playerSelection, computerSelection, winner, round);
}

// Write a function that plays five rounds.
function game () {
    for(let i = 1; i <= 5; i ++) {
        playRound(i);
    }
    logWins();
}

//Write a function that determines the winner of a round.
function checkWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) 
    {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) 
    {
        return "Player";
    }
    else  {
        return "Computer";
    }
}
// Write a function that logs the number of computer wins, player wins, and ties out of 5.
function logWins () {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results: ")
    console.log("Player Wins: ", playerWins);
    console.log("Computer Wins: ", computerWins);
    console.log("Ties: ", ties);
}

//Write a function that logs the round.
function logRound (playerSelection, computerSelection,winner, round) {
 console.log("Round: ", round);
 console.log("------------------------");
}

game();