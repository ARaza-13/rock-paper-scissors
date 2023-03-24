// UI
const buttons = document.querySelectorAll('button');
const reset = document.querySelector('#reset');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const tieScore = document.querySelector('.tie');
const playerC = document.querySelector('.playerChoice');
const computerC = document.querySelector('.computerChoice');
const outcome = document.querySelector('.outcome');
const finalWinner = document.querySelector('.winner');

// Global variables
const choices = ["rock", "paper", "scissors"];
let winners = [];

// function to reset the game
reset.addEventListener("click", function () {
    window.location.reload();
})

// Have the buttons start the round and get the Player Selection using DOM
buttons.forEach((button) => {  // use .forEach to iterate through each button
    button.addEventListener('click', () => {
        const playerSelection = button.getAttribute('id');  // assign the id of the clicked button with the playerChoice
        playRound(playerSelection);  
    });
});

// computer randomly picks rock, paper, or scissors 
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// function that plays a single round of rock, paper, scissors and keeps score
function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) return;  // stops the function once a score of 5 is obtained

    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    winners.push(winner);
    displayRound(playerChoice, computerChoice, winner);
    displayScore();

    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
}

// Determine and display winner for each round
function getWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "Tie";
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") || 
        (playerChoice == "paper" && computerChoice == "rock") || 
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function displayScore() {
    let playerWins = winners.filter((winner) => winner == "Player").length;  // if array contains "Player", it will keep it
    let computerWins = winners.filter((winner) => winner == "Computer").length; // length will tell us how many wins they have
    let ties = winners.filter((winner) => winner == "Tie").length;
    
    playerScore.textContent = `Player Score: ${playerWins}`;
    computerScore.textContent = `Computer Score: ${computerWins}`;
    tieScore.textContent = `Ties: ${ties}`;
}

// Display the selection of the user and the computer along with the outcome of each round using DOM
function displayRound(playerChoice, computerChoice, winner) {
    playerC.textContent = `The Player has chosen ${playerChoice}`;
    computerC.textContent = `The Computer has chosen ${computerChoice}`;

    if (winner === "Player") {
        outcome.textContent = `You won the round! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === "Computer") {
        outcome.textContent = `You lost the round! ${computerChoice} beats ${playerChoice}`;
    } else {
        outcome.textContent = `You both selected ${playerChoice}. This round is a tie`;
    }
}; 

// Determine if score of 5 has been reached to end the game 
function checkWins() {
    let playerWins = winners.filter((winner) => winner == "Player").length; 
    let computerWins = winners.filter((winner) => winner == "Computer").length;

    return Math.max(playerWins, computerWins);
}

function displayEnd() {
    let playerWins = winners.filter((winner) => winner == "Player").length;

    if (playerWins == 5) {
        finalWinner.textContent = 'You Won 5 Games, Congratulations!'
    } else {
        finalWinner.textContent = 'Sorry, the Computer Won 5 times, Better Luck Next Time... '
    }

    reset.style.display = 'inline';
}