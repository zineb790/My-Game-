//getting our h2 elements 
const playerContent = document.querySelector("#playerContent");
const computerContent = document.querySelector("#computerContent");
const resultContent = document.querySelector("#resultContent");
const selectedBtns = document.querySelectorAll(".selectedBtn");
//setting variables 
let player;
let computer;
let result;
//using forEach loop to iternate over our buttons
selectedBtns.forEach(button =>button.addEventListener("click", () => {
    player = button.textContent;
     computerRandomChoice();
    playerContent.textContent = `Player: ${player}`;
    computerContent.textContent = `Computer: ${computer}`;
    resultContent.textContent = getWinner();
}));
//defining a function for the computer radom selection
function computerRandomChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER ";
            break;
        case 3 :
            computer = "SCISSORS";
            break;
    }
}
//defining a function to check the selected option and display result
function getWinner() {
    if (player == computer) {
    return "Draw!";
}else if (computer == "ROCK") {
    return (player == "PAPER")?"you win!" : "you lose!"
}else if (computer == "PAPER") {
    return (player == "SCISSORS")?"you win!" : "you lose!"
}else if (computer == "SCISSORS") {
    return (player == "ROCK")?"you win!" :"you lose!"
}

}
 
