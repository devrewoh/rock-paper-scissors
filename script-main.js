function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  const ROCK = 0;
  const PAPER = 1;
  const SCISSORS = 2;

  let randomDecision;

  if (randomNum === ROCK) {
    randomDecision = "ROCK";
  } else if (randomNum === PAPER) {
    randomDecision = "PAPER";
  } else if (randomNum === SCISSORS) {
    randomDecision = "SCISSORS";
  }
  console.log(`COMPUTER SELECTS: ${randomDecision}`);
}
const playerSelection = prompt("Please enter ROCK, PAPER or SCISSORS:");

getComputerChoice();
