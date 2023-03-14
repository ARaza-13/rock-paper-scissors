const choices = ["rock", "paper", "scissors"];

// computer randomly picks rock, paper, or scissors //
function getComputerChoice() {
    let computerIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[computerIndex];

    return computerChoice;
}

// function that plays a single round of rock, paper, scissors //
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winMsg = `You win! ${playerSelection} beats ${computerSelection}`;
    let loseMsg = `You lose, ${computerSelection} beats ${playerSelection}`;
    let tieMsg = "It's a tie";

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return winMsg;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return winMsg;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return winMsg;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return loseMsg;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return loseMsg;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return loseMsg;
    } else {
        return tieMsg;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));