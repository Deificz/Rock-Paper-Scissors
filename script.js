const btnRock = document.querySelector(`.btnRock`);
const btnPaper = document.querySelector(`.btnPaper`);
const btnScissors = document.querySelector(`.btnScissors`);
const buttons = document.querySelectorAll(`button`);
const resultDiv = document.querySelector(`.resultDiv`)
const result = document.querySelector(`.result`);
const scoreBoard = document.querySelector(`.scoreBoard`);
const finalResult = document.querySelector(`.finalResult`);
const btnPlay = document.querySelectorAll(`.playBtn`);
const btnReset = document.querySelector(`.btnReset`);
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
                                    result.textContent = playRound(`ROCK`, getComputerChoice());
                                    if (result.textContent == `You Lose! Paper BEATS Rock.`){
                                            computerScore += 1;

                                            if(computerScore == 5){
                                                finalResult.textContent = `GAMEOVER! Computer wins!`;
                                                result.textContent = ``;
                                                scoreBoard.textContent =``;
                                                btnPlay.forEach(button =>{
                                                    button.disabled = true;
                                                });
                                                btnReset.style.cssText = `visibility:visible`;
                                                btnReset.addEventListener(`click`, ()=> {
                                                    location.reload()
                                                })
                                            }
                                            scoreBoard.textContent = `Player : ${playerScore} | Computer: ${computerScore}`;
                                    }
                                    else if (result.textContent == `You Win! Rock BEATS Scissors`){
                                            playerScore += 1;
                                            if(playerScore == 5){
                                                finalResult.textContent = `GAMEOVER! Player wins!`;
                                                result.textContent = ``;
                                                scoreBoard.textContent =``;
                                                btnPlay.forEach(button =>{
                                                    button.disabled = true;
                                                });
                                                btnReset.style.cssText = `visibility:visible`;
                                                btnReset.addEventListener(`click`, ()=> {
                                                    location.reload()
                                                })
                                            }
                                            scoreBoard.textContent = `Player : ${playerScore} | Computer: ${computerScore}`;  
                                    }
                                });

    btnPaper.addEventListener(`click`, () => {
                                    result.textContent = playRound(`PAPER`, getComputerChoice());
                                    if (result.textContent == `You Win! Paper BEATS Rock`){
                                            playerScore += 1;
                                            if(playerScore == 5){
                                                finalResult.textContent = `GAMEOVER! Player wins!`;
                                                result.textContent = ``;
                                                scoreBoard.textContent =``;
                                                btnPlay.forEach(button =>{
                                                    button.disabled = true;
                                                });
                                                btnReset.style.cssText = `visibility:visible`;
                                                btnReset.addEventListener(`click`, ()=> {
                                                    location.reload()
                                                })
                                            }
                                            scoreBoard.textContent = `Player : ${playerScore} | Computer: ${computerScore}`;
                                    }
                                    else if (result.textContent == `You Lose! Scissors BEATS Paper.`){
                                            computerScore += 1;
                                            if(computerScore == 5){
                                                finalResult.textContent = `GAMEOVER! Computer wins!`;
                                                result.textContent = ``;
                                                scoreBoard.textContent =``;
                                                btnPlay.forEach(button =>{
                                                    button.disabled = true;
                                                });
                                                btnReset.style.cssText = `visibility:visible`;
                                                btnReset.addEventListener(`click`, ()=> {
                                                    location.reload()
                                                })
                                            }
                                            scoreBoard.textContent = `Player : ${playerScore} | Computer: ${computerScore}`;
                                    }
                                    
                                    
                                });
    btnScissors.addEventListener(`click`, () => {     
                                    result.textContent = playRound(`SCISSORS`, getComputerChoice());
                                    if (result.textContent == `You Lose! Rock BEATS Scissors.`){
                                            computerScore += 1;
                                            if(computerScore == 5){
                                                finalResult.textContent = `GAMEOVER! Computer wins!`;
                                                result.textContent = ``;
                                                scoreBoard.textContent =``;
                                                btnPlay.forEach(button =>{
                                                    button.disabled = true;
                                                });
                                                btnReset.style.cssText = `visibility:visible`;
                                                btnReset.addEventListener(`click`, ()=> {
                                                    location.reload()
                                                })
                                            }
                                            scoreBoard.textContent = `Player : ${playerScore} | Computer: ${computerScore}`;
                                    }
                                    else if (result.textContent == `You Win! Scissors BEATS Paper.`){
                                            playerScore += 1;
                                            if(playerScore == 5){
                                                finalResult.textContent = `GAMEOVER! Player wins!`;
                                                result.textContent = ``;
                                                scoreBoard.textContent =``;
                                                btnPlay.forEach(button =>{
                                                    button.disabled = true;
                                                });
                                                btnReset.style.cssText = `visibility:visible`;
                                                btnReset.addEventListener(`click`, ()=> {
                                                    location.reload()
                                                })
                                            }
                                            scoreBoard.textContent = `Player : ${playerScore} | Computer: ${computerScore}`;
                                    }
                                    

                                });