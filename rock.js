function getComputerChoice(){
    return Math.random()
}

function getHumanChoice(){
    let humanChoice;
    
    while (true) {
        humanChoice = prompt("What bitch")
    
        if (humanChoice === null) {
            console.log("Prompt was canceled. Returning 'CANCELED'.");
            return "CANCELED";
        }
        humanChoice = humanChoice.trim().toUpperCase()

        if (humanChoice == "1" || humanChoice == "ROCK"){
            console.log("ROCK BITCH");
            return "ROCK";
        } else if (humanChoice == "2" || humanChoice == "PAPER") {
            console.log("PAPER BITCH");
            return "PAPER";
        } else if (humanChoice == "3" || humanChoice == "SCISSORS") {
            console.log("SCISSORS BITCH");
            return "SCISSORS";
        } else {
            console.log("Enter a valid value (1, 2, 3, ROCK, PAPER, or SCISSORS)");
        }
    }
}
let result = getHumanChoice()
console.log(result)

let humanScore = 0
let computerScore = 0
