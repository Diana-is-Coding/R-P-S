/* Computer Selection Randomisation 

        const computerSelection = () => {
            const choices = ["rock", "paper", "scissors", "fire", "water",];
            let randomNum = Math.floor(Math.random() * choices.length);
            console.log(choices[randomNum]);
            return(choices[randomNum]);
        }
     -------------------------------- */


    /* Rules and Win Logic */
    //     let playerScore = 0;
    //     let computerScore = 0;
    //     let numberOfTies = 0;
    
    // const winnerResult = (playerChoice, computerChoice) => {
    //     const rules = {
    //         "rock": ["scissors", "fire"],
    //         "paper": ["rock", "water"],
    //         "scissors": ["paper", "water"],
    //         "fire": ["paper", "scissors"],
    //         "water": ["rock", "fire"]
    //     };
        
    //     if (playerChoice === computerChoice) {
    //         return "tie";
    //     } else if (rules[playerChoice] && rules[playerChoice].includes(computerChoice)) {
    //         return "playerWin";
    //     } else if (rules[computerChoice] && rules[computerChoice].includes(playerChoice)) {
    //         return "computerWin";
    //     } else {
    //         return "N/A";
    //     }
    // };
    
    // const scoreHandler = (playerChoice) => {
    //     const computerChoice = computerSelection();
    //     //debugging
    //     console.log(`Player: ${playerChoice}`);
    //     console.log(`Computer: ${computerChoice}`);
    //     //
    //     const result = winnerResult(playerChoice, computerChoice);
    //     console.log(result);

    //     if(result === "playerWin"){
    //         playerScore++;
    //         document.getElementById("TestButton3").textContent = playerScore;
    //     } else if(result === "computerWin"){
    //         computerScore++;
    //         document.getElementById("TestButton2").textContent = computerScore;
    //     } else {
    //         numberOfTies++;
    //         document.getElementById("TestButton4").textContent = numberOfTies
    //     };
    // };

    document.getElementById("TestButton").addEventListener("click", () => scoreHandler("rock"));
    /* ------------------------------- */
 const choices = document.querySelectorAll('.choice');
 const playerChoiceDiv = document.querySelector('.player-choice');
 const computerChoiceDiv = document.querySelector('.computer-choice');
 const playerScoreSpan = document.getElementById('player-score');
 const computerScoreSpan = document.getElementById('computer-score');
 const startGameButton = document.getElementById('start-game');
 const playerNameInput = document.getElementById('player-name');
 const playerNameDisplay = document.getElementById('player-name-display');
 const scoresContainer = document.querySelector('.scores');
 const choicesContainer = document.querySelector('.choices');
 const resultContainer = document.querySelector('.result-container');
 
 let playerScore = 1;
 let computerScore = 1;
 
 const gameRules = {
     rock: { lizard: 'crushes', scissors: 'crushes' },
     paper: { rock: 'covers', spock: 'disproves' },
     scissors: { paper: 'cuts', lizard: 'decapitates' },
     lizard: { paper: 'eats', spock: 'poisons' },
     spock: { rock: 'vaporizes', scissors: 'smashes' },
 };
 
 function getComputerChoice() {
     const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
     const randomIndex = Math.floor(Math.random() * choices.length);
     return choices[randomIndex];
 }
 
 function playRound(playerChoice, computerChoice) {
     if (playerChoice === computerChoice) {
         document.getElementById('tie-result').textContent = `It's a tie! You both chose ${playerChoice}.`; 
         document.getElementById('win-result').textContent = '';
         document.getElementById('lost-result').textContent = '';
 
     } else if (gameRules[playerChoice][computerChoice]) {
         document.getElementById('player-score').textContent = playerScore++;
          document.getElementById('win-result').textContent = `You win! ${playerChoice} ${gameRules[playerChoice][computerChoice]} ${computerChoice}`;
          document.getElementById('tie-result').textContent = '';
          document.getElementById('lost-result').textContent = '';
 
     } else {
         document.getElementById('computer-score').textContent = computerScore++;
         document.getElementById('lost-result').textContent = `You lose! ${computerChoice} ${gameRules[computerChoice][playerChoice]} ${playerChoice}`;
         document.getElementById('win-result').textContent = '';
         document.getElementById('tie-result').textContent = '';
     }
 }
 
 function displayChoices(playerChoice, computerChoice) {
    const playerChoiceImage = document.createElement('img');
    playerChoiceImage.src = `assets/img/${playerChoice}.png`;
    playerChoiceImage.alt = playerChoice;
    playerChoiceDiv.innerHTML = '';
    playerChoiceDiv.appendChild(playerChoiceImage);

    const computerChoiceImage = document.createElement('img');
    computerChoiceImage.src = `assets/img/${computerChoice}.png`;
    computerChoiceImage.alt = computerChoice;
    computerChoiceDiv.innerHTML = '';
    computerChoiceDiv.appendChild(computerChoiceImage);
}
 function updateScores() {
     playerScoreSpan.textContent = playerScore;
     computerScoreSpan.textContent = computerScore;
 }
 
 function playGame(userChoice) {
     const computerChoice = getComputerChoice();
     const winResultText = playRound(userChoice, computerChoice);
     displayChoices(userChoice, computerChoice);
     roundResult.textContent = winResultText;
     updateScores();
 }
 
 function playGame(userChoice) {
     const computerChoice = getComputerChoice();
     const roundResultText = playRound(userChoice, computerChoice);
     displayChoices(userChoice, computerChoice);
     roundResult.textContent = roundResultText;
     updateScores();
 }
 
 choices.forEach(choice => {
     choice.addEventListener('click', () => {
         playGame(choice.dataset.choice);
     });
 });
 
 startGameButton.addEventListener('click', () => {
     const playerName = playerNameInput.value.trim();
     if (playerName) {
         playerNameDisplay.textContent = playerName;
         playerNameInput.style.display = 'none';
         startGameButton.style.display = 'none';
         scoresContainer.style.display = 'flex';
         choicesContainer.style.display = 'flex';
         resultContainer.style.display = 'block';
     } else {
         alert('Please enter your name to start the game.');
     }
 });
 
