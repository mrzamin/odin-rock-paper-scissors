//Set up global variables.
const choices = ["rock", "paper", "scissors"];
let winners = []; //Array with any combination of "Player", "Winner", and "Tie"

// Randomly selects rock, paper, or scissors for the computer.
function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)];
}

function showReset () {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Play again?";
    resetBtn.addEventListener ('click', resetGame);
    const gameWinner = document.querySelector('.gamewinner');
    gameWinner.appendChild(resetBtn);
}

//Resets the game and scoreboard items to 0.
function resetGame () {
    winners = [];
    document.querySelector('.playerchoice').textContent = "Player Choice: ";
    document.querySelector('.computerchoice').textContent = "Computer Choice: ";
    document.querySelector('.playerscore').textContent = "Player Score: 0";
    document.querySelector('.computerscore').textContent = "Computer Score: 0";
    document.querySelector('.ties').textContent = "Ties: 0";
    document.querySelector('.roundwinner').textContent = "Round Winner: ";
    document.querySelector('.winner').textContent = "Winner: ";
};

//Starts the game when a selection is clicked on the UI.
function startGame () {
    let buttons = document.querySelectorAll('button');
    const resetBtn = document.querySelector('.reset');
    resetBtn.style.display = 'none';
    buttons.forEach((button) =>
    button.addEventListener (('click'), () => {
        if(button.id) {
            playRound(button.id);
        }
    }))

}
// User selection from startGame() gets passed in. Plays the round.
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

//Displays the winner at the end on the UI.
function displayEnd () {
    let playerIsWinner = winners.filter((item) => item == "Player").length;
    if (playerIsWinner == 5){
        document.querySelector('.gamewinner').textContent = "You won five games, congrats!";
        showReset();
    }
    else {
        document.querySelector('.gamewinner').textContent = "The computer won five games.";
        showReset();
    }
}

//Displays each player's choice on the UI. 
function displayChoice (playerSelection, computerSelection, winner) {
    document.querySelector('.playerchoice').textContent = `You chose: ${playerSelection}`
    document.querySelector('.computerchoice').textContent = `Computer chose: ${computerSelection}`
    document.querySelector('.roundwinner').textContent = `Round Winner: ${winner}`;
}

//Updates the score on the UI of player wins, computer wins, and ties.
function updateScore (playerSelection, computerSelection, winner) {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    let tieCount = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerscore').textContent = `Player Score: ${pWinCount}`;
    document.querySelector('.computerscore').textContent = `Computer Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Ties: ${tieCount}`;
}


//Checks the winner of a round.
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

//Helper function that returns the highest number of wins.
function checkWins () {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount);
}

startGame();