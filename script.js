const rounds = document.querySelector('#rounds');
const result = document.querySelector('#result');
const choices = document.querySelector('.choices');
const reset = document.querySelector('#reset')
const score = document.querySelector('#score');

let humanScore = 0;
let computerScore = 0;
score.innerHTML =  `Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
reset.style.display = 'none';

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

reset.addEventListener('click', resetGame);

choices.addEventListener('click', (event) => {
    let target = event.target;
    const computerChoice = getComputerChoice();

    switch(target.id) {
        case 'rock':
            playRound('rock', computerChoice);
            break;
        case 'paper':
            playRound('paper', computerChoice);
            break;
        case 'scissors':
            playRound('scissors', computerChoice);
            break;
    }
})


function getComputerChoice() {
    const options = [ 'rock', 'paper', 'scissors'];
    const randNum = Math.round(Math.random() * 2);
    return options[randNum];
}

function playRound(humanChoice, computerChoice) {
    const para = document.createElement('p');

    if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
        para.innerHTML += `Player chose <strong>${humanChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <strong>${humanChoice}</strong> beats <strong>${computerChoice}</strong>. Player wins!`;
        rounds.appendChild(para);
        humanScore++;
        score.innerHTML =  `Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
        checkForWinner();
    } else if (humanChoice === 'rock' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'paper' ) {
        para.innerHTML += `Player chose <strong>${humanChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <strong>${humanChoice}</strong> ties <strong>${computerChoice}</strong>. It's a tie!`;
        rounds.appendChild(para);
        score.innerHTML =  `Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
        checkForWinner();
    } else {
        para.innerHTML += `Player chose <strong>${humanChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <strong>${computerChoice}</strong> beats <strong>${humanChoice}</strong>. Computer wins!`;
        rounds.appendChild(para);
        computerScore++;
        score.innerHTML =  `Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
        checkForWinner();
    }
}


function checkForWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            result.innerHTML += `Human beats computer with a final score of: Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
        } else {
            result.innerHTML += `Computer beats human with a final score of: Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
        }
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
        reset.style.display = 'block';
    }
};

function resetGame() {
    result.innerHTML = '';
    rounds.innerHTML = '';
    humanScore = 0;
    computerScore = 0;
    score.innerHTML = score.innerHTML =  `Human: <strong>${humanScore}</strong> | Computer: <strong>${computerScore}</strong>`;
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;
    reset.style.display = 'none';
}
