console.log("Hello, World");

//rite the logic to get the computer choice 
function getComputerChoice(choice) {
  if (choice === 1){
    return "Rock";
  }else if (choice === 2){
    return "Paper";
  }else if (choice === 3){
    return "Scissor";
  }
}

function randomNumber() {
  let random1 = Math.floor(Math.random() * 3) + 1;
  return random1
}
let random = randomNumber();
console.log("Computer answer: " + getComputerChoice(random));

// Write the logic to get human choice
function getHumanChoice() {
  choice = prompt("Choose one Rock, Paper, or Scissor? ");
  return choice;
}
console.log("Your answer: " + getHumanChoice());