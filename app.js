const options = ["rock", "paper", "scissors"];
// const computerSelect = options[Math.floor(Math.random()*options.length)];

for (var i = 0; i < 5; i++) {
    const computerSelect = options[Math.floor(Math.random()*options.length)];
    playerSelect = prompt("Please choose between: rock, paper and scissors.");
    console.log(`Player chose: ${playerSelect}`);
    console.log(`Computer chose: ${computerSelect}`);
    playRound(playerSelect, computerSelect);
}

function playRound(playerSelect, computerSelect) {
    if (playerSelect === computerSelect) {
        console.log("It's a tie.");
    } else if (playerSelect == 'rock' && computerSelect == "paper" ) {
        console.log("Computer won, paper beats rock.");
    } else if (playerSelect == "paper" && computerSelect == "scissors") {
        console.log("Computer won, scissors beat paper.");
    } else if (playerSelect == "rock" && computerSelect == "scissors") {
        console.log("Player won, rock beats scissors.");
    } else if (playerSelect == "scissors" && computerSelect == "rock") {
        console.log("Computer won, rock beats scissors.");
    } else if (playerSelect == "paper" && computerSelect == "rock") {
        console.log("Player won, paper beats rock.");
    } else if (playerSelect == "scissors" && computerSelect == "paper") {
        console.log("Player won, scissors beat paper");
    }
}