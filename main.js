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

    playerSelection = playerSelection.toLowerCase();
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


const game = () =>{
    let comPoints = 0;
    let userPoints = 0;
    
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Choose rock, paper or scissors')
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        

        if(result.includes("Win!")){
            userPoints++
        }else if(result.includes("Lose!")){
            comPoints++
    }

        console.log(`Scores = Player: ${userPoints}, Computer: ${comPoints}`);
    }


    if (comPoints > userPoints){
        console.log("You lost the game to the computer")
    }else if(userPoints > comPoints){
        console.log("Congrats you beat the computer")
    }else{
        console.log("There was a tie between you and the computer")
    }

}

game();