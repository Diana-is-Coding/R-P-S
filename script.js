/* Computer Selection Randomisation */

    const computerSelection = () => {
        const choices = ["rock", "paper", "scissors", "fire", "air", "water", "sponge"];
        let randomNum = Math.floor(Math.random() * choices.length);
        console.log(choices[randomNum]);
    }

/* -------------------------------- */