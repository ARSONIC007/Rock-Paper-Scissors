function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    let rNum = Math.random();
    if (rNum <= 0.333) return "Rock";
    else if (rNum <= 0.666) return "Paper";
    else return "Scissor";
  }

  function getHumanChoice() {
    return prompt("Enter Your Choice: Rock, Paper or Scissor");
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a Draw!");
      return "Draw";
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      return "Human";
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      return "Computer";
    }
  }

  // -------- 5 ROUNDS --------

  // Round 1
  let result = playRound(getHumanChoice(), getComputerChoice());
  if (result === "Human") humanScore++;
  else if (result === "Computer") computerScore++;

  // Round 2
  result = playRound(getHumanChoice(), getComputerChoice());
  if (result === "Human") humanScore++;
  else if (result === "Computer") computerScore++;

  // Round 3
  result = playRound(getHumanChoice(), getComputerChoice());
  if (result === "Human") humanScore++;
  else if (result === "Computer") computerScore++;

  // Round 4
  result = playRound(getHumanChoice(), getComputerChoice());
  if (result === "Human") humanScore++;
  else if (result === "Computer") computerScore++;

  // Round 5
  result = playRound(getHumanChoice(), getComputerChoice());
  if (result === "Human") humanScore++;
  else if (result === "Computer") computerScore++;

  // -------- FINAL RESULT --------
  console.log(
    `Final Score -> Human: ${humanScore} | Computer: ${computerScore}`,
  );

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 The game is a draw!");
  }
}

playGame();
