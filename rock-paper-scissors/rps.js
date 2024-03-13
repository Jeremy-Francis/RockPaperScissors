
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundCount = 1;

let playerSelection = "";
let computerSelection = "";

let sPaper = "Paper";
let sRock = "Rock";
let sScissors = "Scissors";

let getComputerChoice = () => {

    let iRandom = Math.floor(Math.random() * 3) + 1;

    if (iRandom === 1) return "Rock";
    if (iRandom === 2) return "Paper";
    if (iRandom === 3) return "Scissors";

};

let buttons = document.querySelectorAll('.rps-buttons');
let firstImage = document.querySelector('#first-image');
let secondImage = document.querySelector('#second-image');
let playerWins = document.querySelector('#total-player-wins');
let computerWins = document.querySelector('#total-computer-wins');
let gameTies = document.querySelector('#total-ties');
let totalRounds = document.querySelector('#round');



for (let button of buttons) {
    button.addEventListener('click', function () {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();
        makeHandsShake();

        setTimeout(() => {
            changeImage(computerSelection, firstImage);
            changeImage(playerSelection, secondImage);
            updateScores();


            setTimeout(() => {
                removeShakeClass();
            }, 2000)
        }, 1000);



    });
};




makeHandsShake = () => {
    firstImage.classList.add('slide-in-inverted');
    secondImage.classList.add('slide-in');

};

removeShakeClass = () => {
    firstImage.classList.remove('slide-in-inverted');
    secondImage.classList.remove('slide-in');
    firstImage.src = "Assets/rock (1).png"
    secondImage.src = "Assets/rock (1).png"


};

changeImage = (Selection, Image) => {
    if (Selection === "Rock") {
        Image.src = "Assets/rock (1).png"
    }
    if (Selection === "Paper") {
        Image.src = "Assets/paper.png"
    }
    if (Selection === "Scissors") {
        Image.src = "Assets/scissors.png"
    }

}

updateScores = () => {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        tieScore = tieScore + 1;
        roundCount = roundCount + 1;
        gameTies.textContent = `Ties : ${tieScore}`;
        totalRounds.textContent = `Round : ${roundCount}`;
    }
    if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
        playerScore = playerScore + 1;
        roundCount = roundCount + 1;
        playerWins.textContent = `Total wins : ${playerScore}`;
        totalRounds.textContent = `Round : ${roundCount}`;
    }
    if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
        computerScore = computerScore + 1;
        roundCount = roundCount + 1;
        computerWins.textContent = `Total wins : ${computerScore}`;
        totalRounds.textContent = `Round : ${roundCount}`;
    }
    if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
        computerScore = computerScore + 1;
        roundCount = roundCount + 1;
        computerWins.textContent = `Total wins : ${computerScore}`;
        totalRounds.textContent = `Round : ${roundCount}`;
    }
    if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
        playerScore = playerScore + 1;
        roundCount = roundCount + 1;
        playerWins.textContent = `Total wins : ${playerScore}`;
        totalRounds.textContent = `Round : ${roundCount}`;
    }
    if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
        playerScore = playerScore + 1;
        roundCount = roundCount + 1;
        playerWins.textContent = `Total wins : ${playerScore}`;
        totalRounds.textContent = `Round : ${roundCount}`;
    }
    if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
        computerScore = computerScore + 1;
        roundCount = roundCount + 1;
        computerWins.textContent = `Total wins : ${computerScore}`;
        totalRounds.textContent = `Round : ${roundCount}`;
    }

};



