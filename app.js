const options = ["Rock", "Paper", "Scissors"];

let userScr = 0;
let computerScr = 0;

const buttons = document.querySelectorAll('button');
let playerDisplay = document.querySelector('.player');
let computerDisplay = document.querySelector('.computer');
let resultDisplay = document.querySelector('.result');

let userSelect;
let computerSelect;
let result;

buttons.forEach(button => button.addEventListener('click', (e) => {
    computerSelect = options[Math.floor(Math.random()*options.length)];
    userSelect = e.target.innerHTML;
    playerDisplay.innerHTML = userSelect;
    computerDisplay.innerHTML = computerSelect;
    playRound();
    updateScore();
    if (userScr >= 5) {
        alert("The user won the game! (●'◡'●)")
        location.reload();
    } else if(computerScr >= 5) {
        alert("The computer won the game （＞人＜；)")
        location.reload();
    }
}));

function playRound() {
    if (computerSelect === userSelect) {
        result = "It's a tie!";
    } if (computerSelect === 'Rock' && userSelect === "Paper" ) {
        result = "User wins!";
    } if (computerSelect === "Paper" && userSelect === "Scissors") {
        result = "User wins!";
    } if (computerSelect === "Rock" && userSelect === "Scissors") {
        result = "Computer wins!";
    } if (computerSelect === "Scissors" && userSelect === "Rock") {
        result = "User wins!";
    } if (computerSelect === "Paper" && userSelect === "Rock") {
        result = "Computer wins!";
    } if (computerSelect === "Scissors" && userSelect === "Paper") {
        result = "Computer wins!";
    } 
    resultDisplay.innerHTML = result;
}

function updateScore() {
    if (result === "User wins!") ++userScr;
    else if (result === "Computer wins!") ++computerScr;

    const liveScore = document.querySelector(".live-score");
    liveScore.innerHTML = `${userScr} - ${computerScr}`;
}