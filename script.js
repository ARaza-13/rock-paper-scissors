const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// computer randomly picks rock, paper, or scissors //
function getComputerChoice() {
    let computerIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[computerIndex];

    return computerChoice;
}

// function that plays a single round of rock, paper, scissors and keeps score//
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winMsg = `You win! ${playerSelection} beats ${computerSelection}`;
    let loseMsg = `You lose, ${computerSelection} beats ${playerSelection}`;
    let tieMsg = "It's a tie";

    if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        return winMsg;
    } else if (playerSelection == computerSelection) {
        return tieMsg;
    } else {
        computerScore++;
        return loseMsg;
    }
}

// function that plays 5 rounds and shows the score//
function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter: 'rock', 'paper' or 'scissors'");
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log("The score is: Player = " + playerScore + " | Computer = " + computerScore);
    }
}   

console.log(game());