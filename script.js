const choices = ["rock", "paper", "scissors"];
const winners = [];

// // plays 5 rounds of rock, paper, and scissors
// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         playRound(i);
//     }
//     displayWinner();
// }

// function that plays a single round of rock, paper, scissors and keeps score
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    winners.push(winner);
    displayRound(playerChoice, computerChoice, winner);
}

// computer randomly picks rock, paper, or scissors 
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Get Player Selection using DOM buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {  // use .forEach to iterate through each button
    button.addEventListener('click', () => {
        const playerSelection = button.getAttribute('id');  // assign the id of the clicked button with the playerChoice
        playRound(playerSelection);
    })
})

// Determine and display winner 
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

function displayWinner() {
    let playerWins = winners.filter((winner) => winner == "Player").length;  // if array contains "Player", it will keep it
    let computerWins = winners.filter((winner) => winner == "Computer").length; // length will tell us how many wins they have
    let ties = winners.filter((winner) => winner == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function displayRound(playerChoice, computerChoice, winner) {
    console.log("Round:", 1);
    console.log("Player Choice:", playerChoice);
    console.log("Computer Choice:", computerChoice);
    console.log(winner, "Won the Round");
    console.log("--------------------------------------------")
} 