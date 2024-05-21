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
  return choice.toLowerCase();
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

// for (let i = 1; i <= 5; i++) {
//   let itsHumanChoice = getHumanChoice();
//   let itsComputerChoice = getComputerChoice();
//   let result = playRound(itsHumanChoice, itsComputerChoice);
//   console.log("Round " + (i) + ": " + result.str1 );
  
//   playGame();
// }

// if (humanScore > computerScore) {
//   console.log("You win the game!");
// }else if (humanScore < computerScore){
//   console.log("You Lose the game!");
// }else {
//   console.log("Its a tie!");
// }


const parentDiv = document.querySelector('.parent');
const computerSelection = document.querySelector('.computer');
const playerSelection = document.querySelector('.player');
const play = document.querySelector('.play');
const playAround = document.querySelector('.playAround');

// computerSelection.addEventListener('click', () => {
//   let computerChoice = getComputerChoice();
//   const computer = document.createElement('p');
//   computer.textContent = "computer: " + `${computerChoice}`;
//   parentDiv.appendChild(computer);
// });

// playerSelection.addEventListener('click', () => {
//   let playerChoice = getComputerChoice();
//   const player = document.createElement('p');
//   player.textContent = "player: " + `${playerChoice}`;
//   parentDiv.appendChild(player);
// });

//Play one round
play.addEventListener('click', () => {
  let itsHumanChoice = getHumanChoice();
  let itsComputerChoice = getComputerChoice();
  let result = playRound(itsHumanChoice, itsComputerChoice);
  
  if (result.str2 === "You win!"){
    const div = document.createElement('div');
    div.classList.add('insideParent');
    
    const resultPlay = document.createElement('p');
    resultPlay.textContent = `${result.str1}`;
    
    const computerResult = document.createElement('p');
    computerResult.textContent =  "computer: " + `${itsComputerChoice}`;
    
    playAround.appendChild(div);
    div.appendChild(resultPlay);
    div.appendChild(computerResult);
    
    const deletePara = document.createElement('button');
    deletePara.textContent = "delete";
    div.appendChild(deletePara);
    deletePara.addEventListener('click', () => {
      div.removeChild(resultPlay);
      div.removeChild(computerResult);
      div.removeChild(deletePara);
      playAround.removeChild(div);
    });
  }else if (result.str2 === "You Lose!"){
    const div = document.createElement('div');
    div.classList.add('insideParent');
    
    const resultPlay = document.createElement('p');
    resultPlay.textContent = `${result.str1}`;
    
    const computerResult = document.createElement('p');
    computerResult.textContent =  "computer: " + `${itsComputerChoice}`;
    
    playAround.appendChild(div);
    div.appendChild(resultPlay);
    div.appendChild(computerResult);
    
    const deletePara = document.createElement('button');
    deletePara.textContent = "delete";
    div.appendChild(deletePara);
    deletePara.addEventListener('click', () => {
      div.removeChild(resultPlay);
      div.removeChild(computerResult);
      div.removeChild(deletePara);
      playAround.removeChild(div);
    });
  }else{
    const div = document.createElement('div');
    div.classList.add('insideParent');
    
    const resultPlay = document.createElement('p');
    resultPlay.textContent = "Its a Draw! " + `${itsComputerChoice}`;
    
    playAround.appendChild(div);
    div.appendChild(resultPlay);
    
    const deletePara = document.createElement('button');
    deletePara.textContent = "delete";
    div.appendChild(deletePara);
    deletePara.addEventListener('click', () => {
      div.removeChild(resultPlay);
      div.removeChild(deletePara);
      playAround.removeChild(div);
    });
  }
});
