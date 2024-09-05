

// let computerChoiceFinal = getComputerChoice()

let humanScore = 0
let computerScore = 0

function getComputerChoice(){
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
    function convertToSeed(rawChoice){
        if (rawChoice === "ROCK"){
            return 1;
        }
        else if (rawChoice === "PAPER"){
            return 2;
        }
        else if (rawChoice === "SCISSORS"){
            return 3;
        }
        else if (rawChoice === "CANCELED") {
            return undefined
        }
    }
    function pseudoRNG(seed) {
        if (seed === undefined){
            return console.log("WHAT A BITCH")
        }
        else if (![1, 2, 3].includes(seed)) {
            throw new Error("Invalid seed. Seed must be 1, 2, or 3.");
        }
        else {
    
            // Generate a random number between 0 and 1
            const rand = Math.random();
    
            // 33% chance to match the seed
            if (rand < 0.33) {
                return seed;
            }
    
            // 36% chance to "beat" the seed
            else if (rand < 0.69) {
                // Beat logic: 1 beats 3, 2 beats 1, 3 beats 2
                if (seed === 1) return 2;
                if (seed === 2) return 3;
                if (seed === 3) return 1;
            }
    
            // 31% chance to return something other than seed or "beat"
            else {
                let options = [1, 2, 3].filter(num => num !== seed && num !== (seed % 3) + 1);
                return options[Math.floor(Math.random()*options.length)];
            }
        }
    }
    let humanChoiceFinal = getHumanChoice()
    if (humanChoiceFinal === undefined )
        console.log("WHAT A BITCH");
    else {
        let humanChoiceConverted = convertToSeed(humanChoiceFinal)
        console.log({humanChoiceConverted})
        let computerChoice = pseudoRNG(humanChoiceConverted)
        console.log({computerChoice})
        if (computerChoice === undefined) {
            return ["CANCELED", humanChoiceFinal];
        } else if (computerChoice == 1){
            console.log("Computer: ROCK");
            return ["ROCK", humanChoiceFinal];
        } else if (computerChoice == 2) {
            console.log("Computer: PAPER");
            return ["PAPER", humanChoiceFinal];
        } else if (computerChoice == 3) {
            console.log("Computer: SCISSORS");
            return ["SCISSORS", humanChoiceFinal];
        }
    }
}
console.log(getComputerChoice())

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("AGAIN!")
    }
    else if(
        (humanChoice === "ROCK" && computerChoice === "SCISSORS")
        || (humanChoice === "SCISSORS" && computerChoice === "PAPER")
        || (humanChoice === "PAPER" && computerChoice === "ROCK")
        ){
        console.log("HUMAN WIN!")
        return humanScore++   
    }
    else{
        console.log("HUMAN LOSE!")
        return computerScore++  
    }
}
function playGame(){
    
    while ((humanScore || computerScore) <= 5)
        playRound(getHumanChoice(),getComputerChoice())
}

// playGame()

// let x = "ROCK"
// let y = "PAPER"
// let z = "SCISSORS"


// playRound(x,z)
// playRound(x,z)
// playRound(x,z)
// playRound(x,z)
// playRound(x,y)
// playRound(x,y)
// playRound(x,y)
// console.log({humanScore})
// console.log({computerScore})