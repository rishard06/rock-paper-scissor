// console.log("Hello, World");

//rite the logic to get the computer choice 
function getComputerChoice(choice) {
  let random1 = Math.floor(Math.random() * 3) + 1;
  choice = random1;
  
  if (choice === 1){
    return "rock";
  }else if (choice === 2){
    return "paper";
  }else if (choice === 3){
    return "scissor";
  }
}

// Write the logic to get human choice
function getHumanChoice() {
  let choice = prompt("Choose one Rock, Paper, or Scissor? ");
  choice = choice.toLowerCase();
  return choice;
}
let itsHumanChoice = getHumanChoice();
let itsComputerChoice = getComputerChoice();

console.log("Your answer: " + itsHumanChoice.charAt(0).toUpperCase() + itsHumanChoice.slice(1));
console.log("Computer answer: " + itsComputerChoice.charAt(0).toUpperCase() + itsComputerChoice.slice(1));
//alert("Computer answer: " + getComputerChoice());

//Declare the player score variable
let humanScore = 0;
let computerScore = 0;

//Write the logic to play single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++
    return "You Lose! Paper beats Rock";
  }else if (humanChoice === "paper" && computerChoice === "scissor") {
    computerScore++
    return "You Lose! Scissor beat Paper";
  }else if (humanChoice === "scissor" && computerChoice === "Rock") {
    computerScore++
    return "You Lose! Rock beats Scissor";
  }if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore++
    return "You win! Rock beats Scissor";
  }if (humanChoice === "paper" && computerChoice === "sock") {
    humanScore++
    return "You win! Paper beats Rock";
  }if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore++
    return "You win! Scissor beat Paper" ;
  }else if (humanChoice === computerChoice) {
    return "Its a Draw!";
  }
}
console.log(playRound(itsHumanChoice, itsComputerChoice));
console.log("Computer Score: " + computerScore);
console.log("Your Score: " + humanScore);

// Write the logic to play the entire game

function playGame() {
  
}