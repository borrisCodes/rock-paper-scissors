const btn = document.querySelectorAll('button')
const score = document.querySelector('.score')
const result = document.querySelector('.result')

btn.forEach((button) => {
    button.addEventListener("click", () => {
        var choice = button.id
        playGame(choice, getComputerChoice())
    })
})

var humanScore = 0
var computerScore = 0

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if(choice == 0){
        return "rock"
    } else if(choice == 1){
        return "paper"
    } else{
        return "scissors"
    }
}

function playGame(humanChoice, computerChoice){

    score.textContent = `Score: ${computerScore} - ${humanScore}`

    while(humanScore < 5 && computerScore < 5){
        if(humanChoice == 'rock' && computerChoice == 'rock' || humanChoice == 'paper' && computerChoice == 'paper' || humanChoice == 'scissors' && computerChoice == 'scissors'){
            result.textContent = "Tie"
        }else if(humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'rock'){
            computerScore++
            result.textContent = "Computer wins!"
        }else if(humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'rock'){
            humanScore++
            result.textContent = "Player wins!"
        }

        break
    }
}



