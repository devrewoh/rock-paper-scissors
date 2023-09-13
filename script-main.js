const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === ROCK) {
    console.log(`COMPUTER SELECTED: ROCK`);
  } else if (randomNum === PAPER) {
    console.log(`COMPUTER SELECTED: PAPER`);
  } else if (randomNum === SCISSORS) {
    console.log(`COMPUTER SELECTED: SCISSORS`);
  }
  return randomNum;
}

function getPlayerChoice() {
  let input;
  while (true) {
    input = prompt(
      "Enter your choice of Rock, Paper, or Scissors:"
    ).toUpperCase();

    if (input === "ROCK" || input === "PAPER" || input === "SCISSORS") {
      console.log(`PLAYER SELECTED: ${input}`);
      return input;
    } else {
      alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
    }
  }
}

function playRound(input, randomNum) {
  let result = "";

  if (
    (input === "ROCK" && randomNum === ROCK) ||
    (input === "PAPER" && randomNum == PAPER) ||
    (input === "SCISSORS" && randomNum === SCISSORS)
  ) {
    result = "It's a tie! No points granted!";
  } else if (
    (input === "ROCK" && randomNum === SCISSORS) ||
    (input === "PAPER" && randomNum === ROCK) ||
    (input === "SCISSORS" && randomNum === PAPER)
  ) {
    result = "You win this round!";
    playerScore++;
  } else {
    result = "Computer wins this round!";
    computerScore++;
  }
  console.log(`RESULT: ${result}`);
  console.log(`Player score: ${playerScore}, Computer Score: ${computerScore}`);
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore >= 5) {
    console.log("You win the game!");
  } else if (computerScore >= 5) {
    console.log("Computer wins the game!");
  }
}

game();
