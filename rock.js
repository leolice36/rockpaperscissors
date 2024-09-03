function getComputerChoice(){
    return Math.random()
}

function getHumanChoice(choice){
    choice = Math.floor(prompt("What bitch"))
    if (choice == 1){console.log("rock")}
    else if (choice == 2){console.log("paper")}
    else if (choice == 3){console.log("scissors")}
    else (console.log("Enter a value from 1 to 3")) 
}

let humanScore = 0
let computerScore = 0
