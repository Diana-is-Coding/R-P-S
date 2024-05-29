    /* Computer Selection Randomisation */

        const computerSelection = () => {
            const choices = ["rock", "paper", "scissors", "fire", "air", "water", "sponge"];
            let randomNum = Math.floor(Math.random() * choices.length);
            console.log(choices[randomNum]);
        }

    /* -------------------------------- */

    /* Rules and Win Logic */

    /*
    const winnerResult = (playerChoice, computerChoice) => {
        const rules = {
            "rock": ["scissors", "fire"],
            "paper": ["rock"],
            "scissors": ["paper"],
            "fire": ["paper", "scissors", "water"],
            "water": ["fire", "rock"]
        };
        */
       
    /* going to adapt to html, but this is the basic logic that's going to be used to determine a winner
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (rules[playerChoice] && rules[playerChoice].includes(computerChoice)) {
            return "Player Won";
        } else if (rules[computerChoice] && rules[computerChoice].includes(playerChoice)) {
            return "Computer Won";
        } else {
            return "N/A";
        }
    };
    */ 

    /* ------------------------------- */