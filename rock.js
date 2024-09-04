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
let humanChoiceFinal = getHumanChoice()
console.log(humanChoiceFinal)

function convertToSeed(humanChoiceFinal){
    if (humanChoiceFinal === "ROCK"){
        return 1;
    }
    else if (humanChoiceFinal === "PAPER"){
        return 2;
    }
    else if (humanChoiceFinal === "SCISSORS"){
        return 3;
    }
    else if (humanChoiceFinal === "CANCELED") {
        return undefined
    }
}

let choiceConverted = convertToSeed(humanChoiceFinal)
console.log(choiceConverted)

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
            return function pseudoRNG(seed) {
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
                    return options[Math.floor(Math.random()*options.lenght)];
                };
                }
            }
        }
    }
}

console.log(pseudoRNG(choiceConverted))

function getComputerChoice(){
    return Math.random()
}






let humanScore = 0
let computerScore = 0