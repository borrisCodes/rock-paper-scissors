const choices =["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let choice = Math.floor(Math.random() * choices.length);
    return choice;
}

let result = ' ' 

function playRound(player){
    let computerChoice = getComputerChoice();
    while(true){
        if(player === 'rock' && computerChoice === 2){
            result = `You won! Rock beats ${choices[computerChoice]}`;
        }
        else if(player === 'paper' && computerChoice === 0){
            result = `You won! Paper beats ${choices[computerChoice]}`;
        }
        else if(player === 'scissors' && computerChoice === 1){
            result = `You won! Scissors beats ${choices[computerChoice]}`;
        }
        else if(player === 'paper' && computerChoice === 2){
            result = `You Lose! Scissors beats paper`;
        }
        else if(player === 'scissors' && computerChoice === 0){
            result = `You Lose! Rock beats paper`;
        }
        else if(player === 'rock' && computerChoice === 1){
            result = `You Lose! Paper beats rock`;
        }
        else{
            result = "You tied!";
        }
        game();
        break;
    }
}
const rock = document.querySelector('#rock');

rock.addEventListener('click' , () => {
    playRound('rock');
});

const paper = document.querySelector('#paper')

paper.addEventListener('click', () => {
    playRound('paper');
});

const scissors = document.querySelector('#scissors')

scissors.addEventListener('click', () => {
    playRound('scissors');
});

const results = document.querySelector('.results');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const announceWinner = document.createElement('p');
results.appendChild(playerScore);
results.appendChild(computerScore);
results.appendChild(announceWinner);

let myScore = 0;
let compScore = 0;

computerScore.textContent = `Computer score: ${compScore}`;
playerScore.textContent = `Your score: ${myScore}`;


function game(){
    computerScore.textContent = `Computer score: ${compScore}`;
    playerScore.textContent = `Your score: ${myScore}`;

    if(myScore == 5){
        announceWinner.textContent = 'Player wins!'
    }
    if(compScore == 5){
        announceWinner.textContent = 'Computer wins!'
    }
    if(result.includes('won')){
        if(myScore < 5 && compScore != 5){
            myScore++;
        }
    }
    if(result.includes('Lose')){
        if(compScore < 5 && myScore != 5){
            compScore++;
        }
    }
}
