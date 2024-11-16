const choice = document.getElementsByName('choice');
const rounds = document.getElementById('rounds');
const result = document.getElementById('result');
const submitButton = document.getElementById('submit');
const score = document.getElementById('score');



// 1. Get user choice
//     - Use radio buttons to chooose
//     - Use button to submit choice
// 2. Get computer choice
//     - Use random to get random choice
// 3. Apply logic to determine winner
//     - rock beats scissors
//     - scissors beats paper
//     - paper beats rock
// 4. Print winner to the screen

function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

        if (humanChoice === 'rock' || humanChoice === 'scissors' || humanChoice === 'paper') {
            return humanChoice;
        }
        alert('Please enter a valid choice.');
    }
}


function getComputerChoice() {
    const options = [ 'rock', 'paper', 'scissors'];
    const randNum = Math.round(Math.random() * 2);
    return options[randNum];
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let currentRound = 1;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
            rounds.innerHTML += `Player chose <strong>${humanChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <strong>${humanChoice}</strong> beats <strong>${computerChoice}</strong>. Player wins!`;
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'paper' ) {
            rounds.innerHTML += `Player chose <strong>${humanChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <strong>${humanChoice}</strong> ties <strong>${computerChoice}</strong>. It's a tie!`;
        } else {
            rounds.innerHTML += `Player chose <strong>${humanChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <strong>${computerChoice}</strong> beats <strong>${humanChoice}</strong>. Computer wins!`;
            computerScore++;
        }
    }
    function playNextRound() {
        if (currentRound <= 5) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            rounds.innerHTML += `<h2>Round ${currentRound}</h2>`;
            playRound(humanSelection, computerSelection);
            currentRound++;
            setTimeout(playNextRound, 100);   
        } else {
            result.innerHTML += `<h2> Results</h2>`;
            if (humanScore > computerScore) {
                result.innerHTML += `Human beats computer with a final score of: Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
            } else if (humanScore < computerScore) {
                result.innerHTML += `Computer beats human with a final score of: Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
            } else {
                result.innerHTML += `It's a tie with a final score of: Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
            }
        }
    }

    playNextRound();

}

playGame();
