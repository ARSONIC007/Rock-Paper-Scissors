let getComputerChoice;

let rNum = Number(Math.random().toFixed(3));

0 <= rNum && rNum <= 0.333
  ? (getComputerChoice = "Rock")
  : 0.334 <= rNum && rNum <= 0.666
    ? (getComputerChoice = "Paper")
    : 0.667 <= rNum && rNum <= 0.999
      ? (getComputerChoice = "Scissor")
      : console.log("Error");

let getHumanChoice = prompt("Enter Your Choice", `Rock or Paper or Scissor`);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // make input case-insensitive
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // draw
    if (humanChoice === computerChoice) {
      console.log("It's a Draw!");
      return;
    }

    // human win conditions
    if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }
  const humanSelection = getHumanChoice;
  const computerSelection = getComputerChoice;

  playRound(humanSelection, computerSelection);

  console.log(
    `Human score is ${humanScore} & ComputerScore is ${computerScore}`,
  );
}
