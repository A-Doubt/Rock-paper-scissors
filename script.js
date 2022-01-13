//This funtion returns a random computer choice for the game.
function computerPlay() {
	let computerSelection = Math.floor(Math.random()*3 + 1);
	if (computerSelection === 1) {
		computerSelection = "rock";
	}
	else if (computerSelection === 2) {
		computerSelection = "paper";
	}
	else {
	computerSelection = "scissors"
	}
	return computerSelection;
}

//variables to track scores
let playerScore = 0;
let computerScore = 0;
let playerSelection = undefined;

// function to play a round, show resutls and award 1 score to the winner.
function playRound(playerSelection, computerSelection) {
	const result = document.querySelector('.result');
	if (playerSelection.toLowerCase() === computerSelection) { //If player chooses same as computer.
		result.textContent = ('It\'s a tie!');
		return;
	}
	else if (playerSelection.toLowerCase() === "rock") { //If player chooses ROCK.
		if (computerSelection === "paper") {
			++computerScore;
			result.textContent = ("Paper beats rock. You lose this round!");
			return;
		}
		else {
			++playerScore;
			result.textContent = ("Rock beats scissors. You win this round!");
			return;
		}
	}
	else if (playerSelection.toLowerCase() === "paper") { //If player chooses PAPER.
		if (computerSelection === "rock") {
			++playerScore;
			result.textContent = ("Paper beats rock. You win this round!");
			return;
		}
		else {
			++computerScore;
			result.textContent = ("Scissors beat paper. You lose this round!");
			return;
		}
	}
	else if (playerSelection.toLowerCase() === "scissors") { //If player chooses SCISSORS.
		if (computerSelection === "rock") {
			++computerScore;
			result.textContent = ("Rock beats scissors. You lose this Round!");
			return;
		}
		else {
			++playerScore;
			result.textContent = ("Scissors beat paper. You win this round!");
			return;
		}
	}
}

//all of the buttons as consts, along with reset
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelector('.play-buttons');
const reset = document.querySelector('.reset-button');

const finalResult = document.querySelector('#final-result');
console.log(finalResult);


let gameEnd = false;
// gameEnd === true ? reset.style.display = 'block' : reset.style.display = 'none';
if (gameEnd === false) {
	reset.style.display = 'none';
	finalResult.style.display = 'none';
}
else {
	reset.style.display = 'block';
	finalResult.style.display = 'inline';
}


rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);
reset.addEventListener('click', resetGame);

//different functions for each button to play a round.
function playRock() {
	playerSelection = 'rock';
	playRound(playerSelection, computerPlay());
	updateScore();
}
function playPaper() {
	playerSelection = 'paper';
	playRound(playerSelection, computerPlay());
	updateScore();
}
function playScissors() {
	playerSelection = 'scissors';
	playRound(playerSelection, computerPlay());
	updateScore();
}


function updateScore () {
		playerPoints = document.getElementById('player-score');
		playerPoints.textContent = `Player score: ${playerScore}`;
		computerPoints = document.getElementById('computer-score');
		computerPoints.textContent = `Computer score: ${computerScore}`;
		if (playerScore === 5) {
			buttons.style.display = 'none';
			reset.style.display = 'block';
			finalResult.style.display = 'inline';
			finalResult.textContent = ' YOU WIN!';
			gameEnd = true;
		}
		else if (computerScore === 5) {
			buttons.style.display = 'none';
			reset.style.display = 'block';
			finalResult.style.display = 'inline';
			finalResult.textContent = ' YOU LOSE!';
			gameEnd = true;
		}
}

//reset game after you click 'reset game'
function resetGame() {
	gameEnd = false
	buttons.style.display = 'inline-block';
	reset.style.display = 'none';
	computerScore = 0;
	playerScore = 0;
	playerPoints = document.getElementById('player-score');
	playerPoints.textContent = `Player score: ${playerScore}`;
	computerPoints = document.getElementById('computer-score');
	computerPoints.textContent = `Computer score: ${computerScore}`;
	finalResult.style.display = 'none';
}


