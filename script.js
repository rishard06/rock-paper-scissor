// console.log("Hello, World");

//rite the logic to get the computer choice 
function getComputerChoice(choice) {
  let random1 = Math.floor(Math.random() * 3) + 1;
  choice = random1;
  
  if (choice === 1){
    return "Rock";
  }else if (choice === 2){
    return "Paper";
  }else if (choice === 3){
    return "Scissor";
  }
}

// Write the logic to get human choice
function getHumanChoice() {
  let choice = prompt("Choose one Rock, Paper, or Scissor? ");
  return choice;
}
let itsHumanChoice = getHumanChoice();
let itsComputerChoice = getComputerChoice();

console.log("Your answer: " + itsHumanChoice);
console.log("Computer answer: " + itsComputerChoice);
//alert("Computer answer: " + getComputerChoice());

//Declare the player score variable
const humanScore = 0;
const computerScore = 0;

//Write the logic to play single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    return "Coputer Win!";
  }else if (humanChoice === "Paper" && computerChoice === "Scissor") {
    return "Computer win!";
  }else if (humanChoice === "Scissor" && computerChoice === "Rock") {
    return "Computer Win!"
  }if (humanChoice === "Rock" && computerChoice === "Scissor") {
    return "You win!";
  }if (humanChoice === "Paper" && computerChoice === "Rock") {
    return "You win!";
  }if (humanChoice === "Scissor" && computerChoice === "Paper") {
    return "You win!";
  }else if (humanChoice === computerChoice) {
    return "Its a Draw!";
  }
}
//const humanSelection = getHumanChoice();
//const computerSelection =  getComputerChoice(random);
console.log(playRound(itsHumanChoice, itsComputerChoice));