function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];//array that stores the choices//
    //Math.random() generates a random float between 0 and 1. 
    //Math.random() * choices.length scales the random float to the range of 0 to 2.999... (since choices.length is 3).
    //Math.floor rounds 2.999 to 2//
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function playRound(playerSelection, computerSelection) {
    const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
    const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const drawMessage = "It's a Draw! Both players chose the same option.";
  
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return drawMessage;
    }
  
    switch (playerSelection) {
      case 'rock':
        return (computerSelection === 'scissors') ? winMessage : loseMessage;
      case 'paper':
        return (computerSelection === 'rock') ? winMessage : loseMessage;
      case 'scissors':
        return (computerSelection === 'paper') ? winMessage : loseMessage;
      default:
        return 'Invalid input! Please choose Rock, Paper, or Scissors.';
    }
};


const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

function displayResults(text) {
  const p = document.createElement('p');
  p.textContent = text;
  resultsDiv.appendChild(p);
}

function updateScore() {
  scoreDiv.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
}

function checkForWinner() {
  if (playerScore === 5) {
    displayResults("Congratulations! You won the game!");
    return true;
  } else if (computerScore === 5) {
    displayResults("You lost the game. Better luck next time!");
    return true;
  }
  return false;
}

function play(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResults(result);

  if (result.startsWith("You Win")) {
    playerScore++;
  } else if (result.startsWith("You Lose")) {
    computerScore++;
  }

  updateScore();

  if (checkForWinner()) {
    // Disable buttons after a winner is determined
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

rockBtn.addEventListener('click', () => {
  play('rock');
});

paperBtn.addEventListener('click', () => {
  play('paper');
});

scissorsBtn.addEventListener('click', () => {
  play('scissors');
});

updateScore(); // Display the initial score

  