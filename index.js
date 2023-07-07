//grabbing my h1 elements 
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
//setting my variables
//to store the player choice 
let player;
//to store the computer random choice
let computer;
// to display who won
let result;
//iterating over choice buttons using foreach loop
choiceBtns.forEach(button =>button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));
function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
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

function checkWinner() {
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
 
