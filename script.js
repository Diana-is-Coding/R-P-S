    /* Computer Selection Randomisation */

        const computerSelection = () => {
            const choices = ["rock", "paper", "scissors", "fire", "water",];
            let randomNum = Math.floor(Math.random() * choices.length);
            console.log(choices[randomNum]);
            return(choices[randomNum]);
        }

    /* -------------------------------- */

    /* Rules and Win Logic */
        let playerScore = 0;
        let computerScore = 0;
        let numberOfTies = 0;
    
    const winnerResult = (playerChoice, computerChoice) => {
        const rules = {
            "rock": ["scissors", "fire"],
            "paper": ["rock", "water"],
            "scissors": ["paper", "water"],
            "fire": ["paper", "scissors"],
            "water": ["rock", "fire"]
        };
        
        if (playerChoice === computerChoice) {
            return "tie";
        } else if (rules[playerChoice] && rules[playerChoice].includes(computerChoice)) {
            return "playerWin";
        } else if (rules[computerChoice] && rules[computerChoice].includes(playerChoice)) {
            return "computerWin";
        } else {
            return "N/A";
        }
    };
    
    const scoreHandler = (playerChoice) => {
        const computerChoice = computerSelection();
        //debugging
        console.log(`Player: ${playerChoice}`);
        console.log(`Computer: ${computerChoice}`);
        //
        const result = winnerResult(playerChoice, computerChoice);
        console.log(result);

        if(result === "playerWin"){
            playerScore++;
            document.getElementById("TestButton3").textContent = playerScore;
        } else if(result === "computerWin"){
            computerScore++;
            document.getElementById("TestButton2").textContent = computerScore;
        } else {
            numberOfTies++;
            document.getElementById("TestButton4").textContent = numberOfTies
        };
    };

    document.getElementById("TestButton").addEventListener("click", () => scoreHandler("rock"));
    /* ------------------------------- */