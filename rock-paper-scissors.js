
function getComputerChoice() {
        const choices = ["Rock","Paper","Scissors"];
        getRandomInt = (min,max) => {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min);
        }

        return choices[getRandomInt(0,2)];
}

function playRound(playerChoice,computerChoice) {
        if (playerChoice.toUpperCase() == computerChoice.toUpperCase()) {
                return playRound(prompt("Please enter your choice"),getComputerChoice());
        }
        if (playerChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "SCISSORS") {
                return "You win! Rock beats Scissors";
        }
        else if (playerChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "ROCK") {
                return "You lose! Rock beats Scissors";
        }
        else if (playerChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "PAPER") {
                return "You lose! Paper beats Rock";
        }
        else if (playerChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "SCISSORS") {
                return "You lose! Scissors beats Paper";
        }
        else if (playerChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "ROCK") {
                return "You win! Paper beats Rock";
        }
        else if (playerChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "PAPER") {
                return "You win! Scissors beats Paper";
        }

}

function game() {
        let playerScore = 0;
        let computerScore = 0;
        for(let i = 0; i < 5; i++) {
                let playerChoice = prompt("Please enter your choice");
                let computerChoice = getComputerChoice();
                let result = playRound(playerChoice,computerChoice);
                console.log(result);
                if (result.at(4) == "w") {
                        playerScore += 1;
                } else {
                        computerScore += 1;
                }

        }

        console.log(playerScore > computerScore ? "You win": "Computer wins");
}

game();