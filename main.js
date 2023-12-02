//Set up global variables.
const choices = ["rock", "paper", "scissors"];
const winners = []; //Array with any combination of "Player", "Winner", and "Tie"

// Write a function called getComputerChoice that randomly selects rock, paper, or scissors for the computer and prints to console.*/
function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)];
}

function resetGame () {
    winners = [];
    document.querySelector('.playerchoice').textcontent = "Player Choice: ";
    document.querySelector('.computerchoice').textcontent = "Computer Choice: ";
    document.querySelector('.playerscore').textcontent = "Player Score: 0";
    document.querySelector('.computerscore').textcontent = "Computer Score: 0";
    document.querySelector('.ties').textcontent = "Ties: 0";
    document.querySelector('.roundwinner').textcontent = "Round Winner: ";
    document.querySelector('.winner').textcontent = "Winner: ";

}

//Start the game when a selection is clicked on the UI.
function startGame () {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) =>
    button.addEventListener (('click'), () => {
        if(button.id) {
            playRound(button.id);
        }
    }))

}
// Result of startGame() gets passed in. Write a function that plays the round and ???
function playRound (playerSelection) {
    let wins = checkWins();
    if (wins >= 5) {
        return
    }
    const computerSelection = getComputerChoice();
    const winner = checkWinner (playerSelection, computerSelection);
    winners.push(winner);
    updateScore(playerSelection, computerSelection, winner);
    displayChoice(playerSelection, computerSelection, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
}

//Write a function that displays the winner at the end on the UI.

function displayEnd () {
    let playerIsWinner = winners.filter((item) => item == "Player").length;
    if (playerIsWinner == 5){
        document.querySelector('.gamewinner').textContent = "You won five games, congrats!";
    }
    else {
        document.querySelector('.gamewinner').textContent = "The computer won five games.";
    }

}

//Write a function that displays each player's choice on the UI. 

function displayChoice (playerSelection, computerSelection, winner) {
    document.querySelector('.playerchoice').textContent = `You chose: ${playerSelection}`
    document.querySelector('.computerchoice').textContent = `Computer chose: ${computerSelection}`
    document.querySelector('.roundwinner').textContent = `Round Winner: ${winner}`;
}

//Write a function that updates the score on the UI of player wins, computer wins, and ties.
function updateScore (playerSelection, computerSelection, winner) {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    let tieCount = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerscore').textContent = `Player Score: ${pWinCount}`;
    document.querySelector('.computerscore').textContent = `Computer Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Ties: ${tieCount}`;
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

function checkWins () {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount);
}

startGame();