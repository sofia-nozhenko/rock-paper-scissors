/*STRATEGY FOR JAVASCRIPT

            1.Think about what steps we need
            2.Convert those steps into code
            */

let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

updateScoreElement();
function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = "";

    if (playerMove === "scissors") {
        if (computerMove === "rock") {
            result = "You lose.";
        } else if (computerMove === "paper") {
            result = "You win!";
        } else if (computerMove === "scissors") {
            result = "Tie.";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            result = "You win!";
        } else if (computerMove === "paper") {
            result = "Tie.";
        } else if (computerMove === "scissors") {
            result = "You lose.";
        }
    } else if (playerMove === "rock") {
        if (computerMove === "rock") {
            result = "Tie.";
        } else if (computerMove === "paper") {
            result = "You lose.";
        } else if (computerMove === "scissors") {
            result = "You win!";
        }
    }

    if (result === "You win!") {
        score.wins += 1;
    } else if (result === "You lose.") {
        score.losses += 1;
    } else if (result === "Tie.") {
        score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));
    // local storage supports only strings, we can save an info into local storage
    updateScoreElement();

    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(
        ".js-moves"
    ).innerHTML = `You <img src="img/${playerMove}-emoji.png" class="move-icon" />
    <img src="img/${computerMove}-emoji.png" class="move-icon" /> Computer`;
}

function updateScoreElement() {
    document.querySelector(
        ".js-score"
    ).innerHTML = `Wins : ${score.wins}, Looses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random(); //generate a random number

    let computerMove = ""; // <-- we can use return

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "scissors";
    }

    // we can get a value out of the function
    return computerMove; // <-- return value
}
// parameters
