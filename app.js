const computerSelection = getComputerChoice();
const playerSelection = prompt('Rock , Paper, Scissors: ');

const round = playRound(playerSelection, computerSelection);

console.log(round)



function getComputerChoice() {
    const items = ['Rock' , 'Paper','Scissors'];

    let choice = items[Math.floor(Math.random() * items.length)];

    return choice;
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    const playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();

    if (playerChoice === 'Rock' && computerSelection === 'Scissors'){
        return('You win! Rock beats Scissors');

    }

    else if(playerChoice ==='Paper' && computerSelection === 'Rock') {
        return('You win! Paper beats Rock');

    }

    else if(playerChoice === 'Scissors' && computerSelection=== 'Paper') {
        return('You win! Scissors beats Paper');
    }

    else if (playerChoice===computerSelection) {
        return('It\'s a tie! Both chose ' + computerSelection);
    }

    else {
        return("Computer Wins! " + computerSelection + ' beats ' + playerChoice);
    }
  }

