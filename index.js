//grabbing my h1 elements 
const playerText = document.querySelector("#playerText");
const compuetrText = document.querySelector("#computerText");
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
choiceBtns.forEach(button => addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
}));
function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 1:
            computer = "scissors";
            break;
    }
}

 
