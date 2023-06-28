function getComputerChoice(){

    let choice = [`Rock`, `Paper`, `Scissors`];
    let randomNumber = Math.floor(Math.random() * 3) ;
    
    return choice[randomNumber];
}

function playRound(playerSelection, computerSelection){
    //Converting player's choice to Uppercase
    let playerChoice = playerSelection.toUpperCase();

    //Rock Section
    if (playerChoice == `ROCK` && computerSelection == `Rock`)
        return `It's a TIE!`;
    else if (playerChoice == `ROCK` && computerSelection == `Paper`)
        return `You Lose! Paper BEATS Rock.`;
    else if (playerChoice == `ROCK` && computerSelection == `Scissors`)
        return `You Win! Rock BEATS Scissors`;
    
    //Paper Section
    else if (playerChoice == `PAPER` && computerSelection == `Rock`)
        return `You Win! Paper BEATS Rock`;
    else if (playerChoice == `PAPER` && computerSelection == `Paper`)
        return `It's a TIE!`;
    else if (playerChoice == `PAPER` && computerSelection == `Scissors`)
        return`You Lose! Scissors BEATS Paper.`;

    //Scissors Section
    else if (playerChoice == `SCISSORS` && computerSelection == `Rock`)
        return `You Lose! Rock BEATS Scissors.`;
    else if (playerChoice == `SCISSORS` && computerSelection == `Paper`)
        return `You Win! Scissors BEATS Paper.`;
    else if (playerChoice == `SCISSORS` && computerSelection == `Scissors`)
        return `It's a TIE!`;
}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    let i = 0;
    //Rounds will be repeated 5 times
    for(i=0; i<5; i++){
        let playerSelection = prompt(`Choose your weapon: `);
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
        
    //Scoring system
        if ((playRound(playerSelection, computerSelection)) == `You Lose! Paper BEATS Rock.`) 
            computerScore += 1;
        else if ((playRound(playerSelection, computerSelection)) == `You Win! Rock BEATS Scissors`) 
            playerScore += 1;
        else if ((playRound(playerSelection, computerSelection)) == `You Win! Paper BEATS Rock`) 
            playerScore += 1;
        else if ((playRound(playerSelection, computerSelection)) == `You Lose! Scissors BEATS Paper.`) 
            computerScore += 1;
        else if ((playRound(playerSelection, computerSelection)) == `You Lose! Rock BEATS Scissors.`) 
            computerScore += 1;
        else if ((playRound(playerSelection, computerSelection)) == `You Win! Scissors BEATS Paper.`) 
            playerScore += 1;
        else{
            playerScore += 0;
            computerScore += 0;
        }
        alert(`Player: ${playerScore} | Computer: ${computerScore}`);
    }

    alert(`Final score - Player: ${playerScore} | Computer: ${computerScore}` );
    
}

game();