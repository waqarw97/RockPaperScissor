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

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      if (result.startsWith("You Win")) {
        playerScore++;
      } else if (result.startsWith("You Lose")) {
        computerScore++;
      }
  
      console.log(`Round ${i + 1}: ${result}`);
      console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
      console.log("You lost the game. Better luck next time!");
    } else {
      console.log("The game is a draw!");
    }
}

console.log(game());
  