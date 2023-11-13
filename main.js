/* Write a function called getComputerChoice that randomly selects rock, paper, or scissors for the computer and prints to console.*/
function getComputerSelection () {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection;

    if (randomNumber == 1) {
        computerSelection = "rock";
    } else if (randomNumber == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
return computerSelection;
}

/* Write a function that plays a single round of RPS. */
function playRound (playerSelection, computerSelection) {

    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (computerChoice == "rock" || "paper" || "scissors") {
        if (computerChoice == playerChoice) {
            return "The result is a tie!";
        } else if (computerChoice == "rock") {
            if (playerChoice == "paper") {
                return "Paper beats rock. You win!";
            }
            else if (playerChoice == "scissors") {
                return "Rock beats scissors. You lose!";
            }
        } else if (computerChoice == "paper") {
            if (playerChoice == "rock") {
                return "Paper beats rock. You lose!";
            }
            else if (playerChoice == "scissors") {
                return "Scissors beats paper. You win!";
            }
        } else if (computerChoice == "scissors") {
            if (playerChoice == "rock") {
                return "Rock beats scissors. You win!";
            }
            else if (playerChoice == "paper") {
                return "Scissors beats paper. You lose!";
            }
        }
    }
}

const playerSelection = "scissors";
computerSelection = getComputerSelection();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);