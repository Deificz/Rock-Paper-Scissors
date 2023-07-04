const btnRock = document.querySelector(`.btnRock`);
const btnPaper = document.querySelector(`.btnPaper`);
const btnScissors = document.querySelector(`.btnScissors`);
const buttons = document.querySelectorAll(`button`);
const resultDiv = document.querySelector(`.resultDiv`)
const result = document.querySelector(`.result`);
const scoreBoard = document.querySelector(`.scoreBoard`);
const finalResult = document.querySelector(`.finalResult`);

//Computer Select
function getComputerChoice(){

    let choice = [`Rock`, `Paper`, `Scissors`];
    let randomNumber = Math.floor(Math.random() * 3) ;
    
    return choice[randomNumber];
}
//Game Function
function playRound(playerSelection, computerSelection){
    //Converting player's choice to Uppercase
    let playerChoice = playerSelection;

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
//With UI
let playerScore = 0;
let computerScore = 0;

    btnRock.addEventListener(`click`, () => {

                                    if(playerScore == 5 || computerScore == 5){
                                        if(playerScore == 5){
                                            finalResult.textContent = `Player wins!`;
                                        }
                                        if(computerScore == 5){
                                            finalResult.textContent = `Computer wins!`;
                                        }
                                        buttons.forEach(button =>{
                                            button.disabled = true;
                                        });
                                    }

                                    else{
                                    result.textContent = playRound(`ROCK`, getComputerChoice());
                                    if (result.textContent == `You Lose! Paper BEATS Rock.`) 
                                            computerScore += 1;
                                    else if (result.textContent == `You Win! Rock BEATS Scissors`)
                                            playerScore += 1;
            
                                    scoreBoard.textContent = `Player : ${playerScore} | Computer: ${computerScore}`;
                                    }
                                });

    btnPaper.addEventListener(`click`, () => {
                                    if(playerScore == 5 || computerScore == 5){
                                        if(playerScore == 5){
                                            finalResult.textContent = `Player wins!`;
                                        }
                                        if(computerScore == 5){
                                            finalResult.textContent = `Computer wins!`;
                                        }
                                        buttons.forEach(button =>{
                                            button.disabled = true;
                                        });
                                    }
                                    
                                    else{
                                    result.textContent = playRound(`PAPER`, getComputerChoice());
                                    if (result.textContent == `You Win! Paper BEATS Rock`) 
                                            playerScore += 1;
                                    else if (result.textContent == `You Lose! Scissors BEATS Paper.`) 
                                            computerScore += 1;
                                    scoreBoard.textContent = `Player : ${playerScore} | Computer: ${computerScore}`;
                                    }
                                });
    btnScissors.addEventListener(`click`, () => {
        if(playerScore == 5 || computerScore == 5){
                                        if(playerScore == 5){
                                            finalResult.textContent = `Player wins!`;
                                        }
                                        if(computerScore == 5){
                                            finalResult.textContent = `Computer wins!`;
                                        }
                                        buttons.forEach(button =>{
                                            button.disabled = true;
                                        });
                                    }

                                    else{
                                    result.textContent = playRound(`SCISSORS`, getComputerChoice());
                                    if (result.textContent == `You Lose! Rock BEATS Scissors.`) 
                                            computerScore += 1;
                                    else if (result.textContent == `You Win! Scissors BEATS Paper.`) 
                                            playerScore += 1;
                                    scoreBoard.textContent = `Player : ${playerScore} | Computer: ${computerScore}`;
                                    }
                                });
                            

