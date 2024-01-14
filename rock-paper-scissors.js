let playerScore = 0;
let computerScore = 0;
let singleRoundResult = document.querySelector('#single-round-result');
let finalRoundResult = document.querySelector(".full-game-result");
let playerScoreDiv = document.querySelector(".player");
let computerScoreDiv = document.querySelector(".computer");
let buttonContainer = document.querySelectorAll("button");
buttonContainer.forEach((button) => {
        button.addEventListener("click",() => {
                console.log(button.textContent)
                let player = button.innerText;
                playRound(button.innerText,getComputerChoice());
                if (playerScore == 5) {
                        finalRoundResult.textContent = "You won";
                } else if (computerScore == 5) {
                        finalRoundResult.textContent = "Computer won"
                }
        });
})




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
                alert("Tie! Both selected the same option");
        }
        if (playerChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "SCISSORS") {
                playerScore += 1;
                playerScoreDiv.textContent = `Player Score: ${playerScore}`
                singleRoundResult.textContent = "You win! Rock beats Scissors";
        }
        else if (playerChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "ROCK") {
                ComputerScore += 1;
                computerScoreDiv.textContent = `Computer Score: ${computerScore}`
                singleRoundResult.textContent = "You lose! Rock beats Scissors";
        }
        else if (playerChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "PAPER") {
                computerScore += 1;
                computerScoreDiv.textContent = `Computer Score: ${computerScore}`
                singleRoundResult.textContent = "You lose! Paper beats Rock";
        }
        else if (playerChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "SCISSORS") {
                computerScore += 1;
                computerScoreDiv.textContent = `Computer Score: ${computerScore}`
                singleRoundResult.textContent = "You lose! Scissors beats Paper";
        }
        else if (playerChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "ROCK") {
                playerScore += 1;
                playerScoreDiv.textContent = `Player Score: ${playerScore}`
                singleRoundResult.textContent = "You win! Paper beats Rock";
        }
        else if (playerChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "PAPER") {
                playerScore += 1;
                playerScoreDiv.textContent = `Player Score: ${playerScore}`
                singleRoundResult.textContent = "You win! Scissors beats Paper";
        }

}