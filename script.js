const choices =["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let choice = Math.floor(Math.random() * choices.length)
    return choice
}

function playRound(){
    let playerChoice = prompt("Make your selection:")
    let player = playerChoice.toLowerCase()
    let computerChoice = getComputerChoice()
    while(true){
        if(player === 'rock' && computerChoice === 2){
            return `You won! Rock beats ${choices[computerChoice]}`
        }
        else if(player === 'paper' && computerChoice === 0){
            return`You won! Paper beats ${choices[computerChoice]}`
        }
        else if(player === 'scissors' && computerChoice === 1){
            return `You won! Scissors beats ${choices[computerChoice]}`
        }
        else if(player === 'paper' && computerChoice === 2){
            return `You Lose! Scissors beats paper`
        }
        else if(player === 'scissors' && computerChoice === 0){
            return `You Lose! Rock beats paper`
        }
        else if(player === 'rock' && computerChoice === 1){
            return `You Lose! Paper beats rock`
        }
        else{
            return "You tied!"
        }
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    for(let i = 0; i < 5; i++){
        let result = playRound()
        if(result.includes("won") == true){
            playerScore++
            console.log("Player won!")
        } else if(result.includes("Lose") == true){
            computerScore++
            console.log("Computer won!")
        } else{
            i = i-1
            console.log("You tied!")
        }
    }
}
console.log(game())