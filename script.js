const options = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;

const buttons = document.querySelectorAll(".btn")

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerScore = document.querySelector('.playerScore');
const comScore = document.querySelector('.comScore');
const gameResult = document.querySelector('.endGame');
const matchResult = document.querySelector('.match');
const resetBtn = document.querySelector('.reset')

resetBtn.style.display = 'none'

function resetGame() {
    scorePlayer = 0;
    scoreComputer = 0;
    playerScore.textContent = "0";
    comScore.textContent = "0";
    gameResult.textContent = "";
    matchResult.textContent = "";
    resetBtn.style.display = 'none'
    buttons.disabled = false;
}

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice; 
}

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

function game(playerSelection){
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if(checkRound(playerSelection,computerSelection) === "Player"){
        scorePlayer++;
        playerScore.textContent = `${scorePlayer}`
    }
    else if(checkRound(playerSelection, computerSelection) == "Computer"){
        scoreComputer++;
        comScore.textContent = `${scoreComputer}`
    }
    if(scorePlayer >= 5){
        gameResult.textContent = `You Player won!!!`
        resetBtn.style.display = 'block'
        buttons.forEach((btn) => {
            btn.disabled = true
        })
    }
    else if(scoreComputer >= 5){
        gameResult.textContent = `The Computer won!!!`
        resetBtn.style.display = 'block'
        buttons.forEach((btn) => {
            btn.disabled = true
        })
    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        game(btn.dataset.button)
    });
});     