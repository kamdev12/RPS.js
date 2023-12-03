console.log("Hello World!");

const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1;
    

    switch (choice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
            
    }

    console.log(choice);
}

//console.log(getComputerChoice());

const playRound = (playerSelection, computerSelection) =>{
    

    if (playerSelection == computerSelection){
        return "There was a tie, replay round"
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "paper" && computerSelection == "rock")||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
}

const playerSelection = "rock"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))