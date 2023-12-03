console.log("Hello World!");

const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 4);
    

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
            default :
                return "There was an unexpected error."
            break;
    }

    console.log(choice);
}

console.log(getComputerChoice());