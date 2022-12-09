const options = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll(".btn")

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerScore = document.querySelector('.playerScore');
const comScore = document.querySelector('.comScore');
const gameResult = document.querySelector('.endGame');
const matchResult = document.querySelector('.match'); 

function resetGame() {
    playerScore.textContent = "0"
    comScore.textContent = "0"
    gameResult.textContent = ""
    matchResult.textContent = ""
}

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice; 
}

/*function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput === false){
        const choice = prompt("Rock, Paper or Scissors?");
        if(choice == null){
            continue;
        }
        const choiceLower = choice.toLowerCase()
        if(options.includes(choiceLower)){
            validatedInput = true;
            return choiceLower; 
        }
    } 
}*/

function checkRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const response = checkRound(playerSelection,computerSelection)
    if(response === "Tie"){
        gameResult.textContent = "It's a tie!"
        matchResult.textContent = ""
        return "It's a tie"
        
    }
    else if(response === "Player") {
        gameResult.textContent = "You Win!"
        matchResult.textContent = `${playerSelection} beats ${computerSelection}.`
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
    else {
        gameResult.textContent = "You Lose!"
        matchResult.textContent = `${computerSelection} beats ${playerSelection}.`
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function getPlayerChoice1() {
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.dataset.button) {
                console.log(playRound(btn.dataset.button, getComputerChoice()))
            }
        });
    });     
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {  //Retirar loop/Fazer condicional para 5 pontos :=)
        if(i === 0){
            console.log("First Round!");
        }
        else if(i === 4){
            console.log("Last Round!");
        }
        const playerSelection = getPlayerChoice1();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------------------")
        if(checkRound(playerSelection,computerSelection) === "Player"){
            scorePlayer++;
            playerScore.textContent = `${scorePlayer}`
        }
        else if(checkRound(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
            comScore.textContent = `${scoreComputer}`
        }
    }
    if(scorePlayer > scoreComputer){
        gameResult.textContent = `Player won by ${scorePlayer}/5`
        console.log(`Player won by ${scorePlayer}/5`)
    }
    else if(scorePlayer < scoreComputer){
        gameResult.textContent = `Computer won by ${scoreComputer}/5`
        console.log(`Computer won by ${scoreComputer}/5`)
    }
    else{
        gameResult.textContent = "It's a tie!"
        console.log("It's a tie!")
    }
}

//game()
getPlayerChoice1()