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
                console.log("ME: ROCK BITCH");
                return "ROCK";
            } else if (humanChoice == "2" || humanChoice == "PAPER") {
                console.log("ME: PAPER BITCH");
                return "PAPER";
            } else if (humanChoice == "3" || humanChoice == "SCISSORS") {
                console.log("ME: SCISSORS BITCH");
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
        let computerChoice = pseudoRNG(humanChoiceConverted)
        let computerChoiceFinal;
        if (computerChoice === undefined) {
            computerChoiceFinal = "CANCELED";
        } else if (computerChoice == 1){
            console.log("Computer: ROCK");
            computerChoiceFinal = "ROCK";
        } else if (computerChoice == 2) {
            console.log("Computer: PAPER");
            computerChoiceFinal = "PAPER";
        } else if (computerChoice == 3) {
            console.log("Computer: SCISSORS");
            computerChoiceFinal = "SCISSORS";
        }
    return [humanChoiceFinal, computerChoiceFinal]
    }
}
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
    
    while (Math.max(humanScore, computerScore) < 5){
        
        let choiceArray = getComputerChoice()
        if (choiceArray.includes('CANCELED')) {
            console.log("Exiting game.");
            break
        }
            playRound(...choiceArray)
            console.log({humanScore})
            console.log({computerScore})            
    }

    if (humanScore > computerScore) {
        console.log("Human wins with a score of", humanScore);
    } else if (computerScore > humanScore) {
        console.log("Computer wins with a score of", computerScore);
    }
}