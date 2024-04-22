console.log("Hello, World");

//Wirte the logic to get the computer choice 
function getComputerChoice(choice) {
  if (choice === 1){
    console.log("rock");
  }else if (choice === 2){
    console.log("paper");
  }else if (choice === 3){
    console.log("scissor");
  }
}

function randomNumber() {
  let random1 = Math.floor(Math.random() * 3) + 1;
  return random1
}
let random = randomNumber();
// console.log(getComputerChoice(Math.random(random)))
console.log(getComputerChoice(random));