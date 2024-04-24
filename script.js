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

//Write the logic to play single round
function playRound (humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    // computerScore++;
    return {str1:"You Lose! Paper beats Rock", str2:"You Lose!"};
  }else if (humanChoice === "paper" && computerChoice === "scissor") {
    // computerScore++;
    return {str1:"You Lose! Scissor beat Paper", str2:"You Lose!"};
  }else if (humanChoice === "scissor" && computerChoice === "rock") {
    // computerScore++;
    return {str1:"You Lose! Rock beats Scissor", str2:"You Lose!"};
  }else if (humanChoice === "rock" && computerChoice === "scissor") {
    // humanScore++;
    return {str1:"You win! Rock beats Scissor", str2:"You win!"};
  }else if (humanChoice === "paper" && computerChoice === "rock") {
    // humanScore++;
    return {str1:"You win! Paper beats Rock", str2:"You win!"};
  }else if (humanChoice === "scissor" && computerChoice === "paper") {
    // humanScore++;
    return {str1:"You win! Scissor beat Paper", str2:"You win!"} ;
  }else if (humanChoice === computerChoice) {
    return {str1:"Its a Draw!"};
  }
}

//Declare the player score variable
let humanScore = 0;
let computerScore = 0;

// Write the logic to play the entire game
function playGame() {
    let itsHumanChoice = getHumanChoice();
    let itsComputerChoice = getComputerChoice();
    let result = playRound(itsHumanChoice, itsComputerChoice);
    let i = 0; 
    
    console.log("Round " + (i + 1) + ": " + result.str1 );
    console.log("Your Answer: " + itsHumanChoice.charAt(0).toUpperCase() + itsHumanChoice.slice(1));
    console.log("Computer Answer: " + itsComputerChoice.charAt(0).toUpperCase() + itsComputerChoice.slice(1));
    
    if (result.str2 === "You win!") {
      humanScore++;
    }else if (result.str2 === "You Lose!"){
      computerScore++;
    }
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    
}

for (let i = 0; i < 5; i++) {
  playGame();
}

if (humanScore > computerScore) {
  console.log("You win the game!");
}else if (humanScore < computerScore){
  console.log("You Lose the game!")
}else {
  console.log("Its a tie!")
}