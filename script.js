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

function getHumanChoice(){

    var choice
    while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        choice = prompt("Rock, paper or scissors?").toLowerCase()    
    } 
    return choice
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == 'rock' && computerChoice == 'rock'){
        console.log("Tie")
    }else if(humanChoice == 'paper' && computerChoice == 'paper'){
        console.log("Tie")
    }else if(humanChoice == 'scissors' && computerChoice == 'scissors'){
        console.log("Tie")
    }else if(humanChoice == 'rock' && computerChoice == 'paper'){
        computerScore++
        console.log("computer wins!")
    }else if(humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore++
        console.log("Player wins!")
    }else if(humanChoice == 'paper' && computerChoice == 'scissors'){
        computerScore++
        console.log("Computer wins!")
    }else if(humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore++
        console.log("player wins!")
    }else if(humanChoice == 'scissors' && computerChoice == 'rock'){
        computerScore++
        console.log("computer wins!")
    }else{
        humanScore++
        console.log('Human wins!')
    }
}

function playGame(){
    let i = 0
    while(i < 5){
        console.log(humanScore, computerScore)
        playRound(getHumanChoice(), getComputerChoice())
        i++
    }

    if(humanScore > computerScore){
        console.log("Player wins the game!")
    }else if(computerScore > humanScore){
        console.log("Computer wins the game!")
    }else{
        console.log("Tie")
    }
}

playGame()


