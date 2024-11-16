const choice = document.getElementsByName('choice');
const compChoice = document.getElementById('comp-choice');
const result = document.getElementById('result');
const submitButton = document.getElementById('submit');
const score = document.getElementById('score');

let humanScore = 0;
let computerScore = 0;


// 1. Get user choice
//     - Use radio buttons to chooose
//     - Use button to submit choice
// 2. Get computer choice
//     - Use random to get random choice
// 3. Apply logic to determine winner
//     - Rock beats scissors
//     - Scissors beats paper
//     - Paper beats rock
// 4. Print winner to the screen

function getUserChoice() {
    for (let i = 0; i < choice.length; i++) {
        if(choice[i].checked) {
            result.innerHTML = `The user chose <strong>${choice[i].value}</strong>`;
            return choice[i].value;
        }
    }
}

function getComputerChoice() {
    const options = [ 'Rock', 'Paper', 'Scissors'];
    const randNum = Math.round(Math.random() * 2);
    return options[randNum];
}

function rpsLogic() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();

    if (userChoice === 'Rock' && computerChoice === 'Scissors' || userChoice === 'Scissors' && computerChoice === 'Paper' || userChoice === 'Paper' && computerChoice === 'Rock') {
        result.innerHTML = `Player chose <strong>${userChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <strong>${userChoice}</strong> beats <strong>${computerChoice}</strong>. Player wins!`;
        humanScore++;
    } else if (userChoice === 'Rock' && computerChoice === 'Rock' || userChoice === 'Scissors' && computerChoice === 'Scissors' || userChoice === 'Paper' && computerChoice === 'Paper' ) {
        result.innerHTML = `Player chose <strong>${userChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <strong>${userChoice}</strong> ties <strong>${computerChoice}</strong>. It's a tie!`;
    } else {
        result.innerHTML = `Player chose <strong>${userChoice}</strong>, computer chose <strong>${computerChoice}</strong>. <strong>${computerChoice}</strong> beats <strong>${userChoice}</strong>. Computer wins!`;
        computerScore++;
    }

    score.innerHTML = `Player score: <strong>${humanScore}</strong> | Computer score: <strong>${computerScore}</strong>`
}
