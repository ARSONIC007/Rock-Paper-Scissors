console.log("Hello, World!");

let getComputerChoice;

let rNum = Number(Math.random().toFixed(3));

0 <= rNum && rNum <= 0.333
  ? (getComputerChoice = "Rock")
  : 0.334 <= rNum && rNum <= 0.666
    ? (getComputerChoice = "Paper")
    : 0.667 <= rNum && rNum <= 0.999
      ? (getComputerChoice = "Scissor")
      : console.log("Error");

console.log(getComputerChoice);
