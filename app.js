let playerPoints = 0
let computerPoints = 0

const rockButtom = document.querySelector('.rock')
const paperButtom = document.querySelector('.paper')
const scissorsButtom = document.querySelector('.scissors')
const result = document.querySelector('h1')

const scoreSpanPlayer = document.querySelector('.score-player')
const scoreSpanComputer = document.querySelector('.score-computer')

const rockCompButtom = document.querySelector('.rock-comp')
const paperCompButtom = document.querySelector('.paper-comp')
const scissorsCompButtom = document.querySelector('.scissors-comp')

function display_computer_choice (computerSelection) {
    rockCompButtom.style.cssText = '';
    paperCompButtom.style.cssText = '';
    scissorsCompButtom.style.cssText = '';   
   
    if(computerSelection == 'rock')
    {
        rockCompButtom.style.cssText = 'transform: scale(1.1);'     
    }
    else if(computerSelection == 'scissors')
    {
        scissorsCompButtom.style.cssText = 'transform: scale(1.1);'
    }
    else {
        paperCompButtom.style.cssText = 'transform: scale(1.1);'   
    }      
}

function playRound(playerSelection, computerSelection) { 
    
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerPoints++       
        result.textContent = "You Won! Rock beats Scissors"
    }
    else if(playerSelection ==='paper' && computerSelection === 'rock') {     
        playerPoints++    
        result.textContent = "You Won! Paper beats Rock"
    }
    else if(playerSelection === 'scissors' && computerSelection=== 'paper') {    
        playerPoints++
        result.textContent = "You Won! Scissors beats Paper"
        }
    
    else if (playerSelection==computerSelection) {
        result.textContent = "Draw! Both chose " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }
    else {
        computerPoints++  
        result.textContent = "Computer Won! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }  
  }
  
  function display_score(playerPoints, computerPoints) {
    scoreSpanPlayer.textContent = `USER SCORE: ${playerPoints}`
    scoreSpanComputer.textContent = `COMPUTER SCORE: ${computerPoints}`
  }

  function getComputerChoice() {
    const items = ['rock' , 'paper','scissors'];
    return items[Math.floor(Math.random() * items.length)];   
  }

  function announceWinner() {
    if(playerPoints === 5) {
        result.textContent = 'User Won!';
        resetGame();
    } else if(computerPoints === 5) {
        result.textContent = 'Computer Won!';
        resetGame();
    }
  }   
    function resetGame() {
        playerPoints = 0;
        computerPoints = 0;
        display_score(playerPoints, computerPoints);
        rockCompButtom.style.cssText = '';
        paperCompButtom.style.cssText = '';
        scissorsCompButtom.style.cssText = '';   
    }

 

  rockButtom.addEventListener('click', () => {
    computerSelection = getComputerChoice()
    playRound('rock', computerSelection)
    display_score(playerPoints, computerPoints)
    announceWinner()
    display_computer_choice(computerSelection)

})
paperButtom.addEventListener('click', () => {
    computerSelection = getComputerChoice()
    playRound('paper', computerSelection)    
    display_score(playerPoints, computerPoints)
    announceWinner()
    display_computer_choice(computerSelection)
 
})
scissorsButtom.addEventListener('click', () => {
    computerSelection = getComputerChoice()  
    playRound('scissors', computerSelection)
    display_score(playerPoints, computerPoints)
    announceWinner()
    display_computer_choice(computerSelection)
})
