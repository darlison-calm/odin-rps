let playerScore = 0
let computerScore = 0

playGame()


function getComputerChoice() {
    const items = ['Rock' , 'Paper','Scissors'];

    let choice = items[Math.floor(Math.random() * items.length)];

    return choice;
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    const playerChoice = playerSelection

    if (playerChoice === 'Rock' && computerSelection === 'Scissors'){
        return('You win the round! Rock beats Scissors');

    }

    else if(playerChoice ==='Paper' && computerSelection === 'Rock') {
        return('You win the round! Paper beats Rock');

    }

    else if(playerChoice === 'Scissors' && computerSelection=== 'Paper') {
        return('You win the round! Scissors beats Paper');
    }

    else if (playerChoice===computerSelection) {
        return('It\'s a tie! Both chose ' + computerSelection);
    }

    else {
        return('Computer wins the round! ' + computerSelection + ' beats ' + playerChoice);
    }
  }

function playGame() {

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Rock , Paper, Scissors: ');
        
        playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
        
        let roundWinner = playRound(playerSelection, computerSelection);

        console.log('Computer: ' + computerSelection , 'Player: ' + playerSelection) 

        console.log(roundWinner)

        if (roundWinner.startsWith('You win')) {
            playerScore++
            console.log('You ' + playerScore)
        }

        else if (roundWinner.startsWith('Computer wins') ){
            computerScore++
            console.log('Computer ' + computerScore)

        }

        

    }

    if(computerScore > playerScore) {
        console.log("Computer wins the game")
    }

    else if (playerScore > computerScore) {
        console.log('You win the game!')
    }

    else {
        console.log("The game ends in a draw!")
    }

    console.log("Computer Score: " + computerScore, "Player Score: " + playerScore)

}

