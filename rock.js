let humanScore = 0
let computerScore = 0

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.addEventListener('click', () => playRound("ROCK"));
paperBtn.addEventListener('click', () => playRound("PAPER"));
scissorsBtn.addEventListener('click', () => playRound("SCISSORS"));

const humanChoiceDisplay = document.querySelector('#humanChoiceDisplay');;
const computerChoiceDisplay = document.querySelector('#computerChoiceDisplay');
const humanScoreDisplay = document.querySelector('#humanScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
const roundResult = document.querySelector('#roundResult');


function getHumanChoice(buttonInput){
    if (buttonInput === null) {
        console.log("Prompt was canceled. Returning 'CANCELED'.")
    }
}
function getComputerChoice(humanChoiceFinal){
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
            return 
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
    if (humanChoiceFinal === undefined )
        console.log("WHAT A BITCH");
    else {
        let humanChoiceConverted = convertToSeed(humanChoiceFinal)
        let computerChoice = pseudoRNG(humanChoiceConverted)
        let computerChoiceFinal;
        if (computerChoice === undefined) {
            computerChoiceFinal = "CANCELED";
        } else if (computerChoice == 1){
            computerChoiceFinal = "ROCK";
        } else if (computerChoice == 2) {
            computerChoiceFinal = "PAPER";
        } else if (computerChoice == 3) {
            computerChoiceFinal = "SCISSORS";
        }
    return computerChoiceFinal
    }
}
function playRound(humanChoice){
    getHumanChoice(humanChoice);
    let computerChoice = getComputerChoice(humanChoice);
    
    if (humanChoice ==='CANCELED') {
        console.log("Exiting game.");
        return
    }

    if (humanChoice === computerChoice){
        roundResultDisplay = "AGAIN!";  
    }
    else if(
        (humanChoice === "ROCK" && computerChoice === "SCISSORS")
        || (humanChoice === "SCISSORS" && computerChoice === "PAPER")
        || (humanChoice === "PAPER" && computerChoice === "ROCK")
        ){
        roundResultDisplay = "HUMAN SCORE!";
        humanScore++; 
    }
    else{
        roundResultDisplay = "COMPUTER SCORE!";
        computerScore++  
    }
    displayResults(humanChoice,computerChoice,humanScore,computerScore,roundResultDisplay);
    playGame()
}
function displayResults(humanChoiceText,computerChoiceText,humanScoreText,computerScoreText,roundResultText){
    humanChoiceDisplay.textContent  = `${humanChoiceText}`;
    computerChoiceDisplay.textContent = `${computerChoiceText}`;
    humanScoreDisplay.textContent = `${humanScoreText}`;
    computerScoreDisplay.textContent = `${computerScoreText}`;
    roundResult.textContent = `${roundResultText}`;
}
function playGame(){
    if (Math.max(humanScore, computerScore) < 5){
        return
    } else if (humanScore > computerScore) {
        roundResult.textContent = `HUMAN WIN!`;
        computerScore = 0;
        humanScore = 0;
    } else if (computerScore > humanScore) {
        roundResult.textContent = `COMPUTER WIN!`;
        computerScore = 0;
        humanScore = 0;
    }
}



// Dialog feature
const firstDialog = document.getElementById('firstDialog');
const closeFirstDialogBtn = document.getElementById('closeFirstDialog');

 // Open the first dialog by default
 document.addEventListener('DOMContentLoaded', () => {
    firstDialog.showModal();
    // updateOpenSecondDialogButton();
});

closeFirstDialogBtn.addEventListener('click', () => {
    firstDialog.close();
});