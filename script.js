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

let playerScore = 0;
let computerScore = 0;
let playerSelection = undefined;

//This funtion plays a round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
	playerSelection = window.prompt("Choose 'rock', 'paper' or 'scissors'");
	if (playerSelection.toLowerCase() === computerSelection) { //If player chooses same as computer.
		console.log("It's a tie!");
		return "It's a tie!";
	}
	else if (playerSelection.toLowerCase() === "rock") { //If player chooses ROCK.
		if (computerSelection === "paper") {
			++computerScore;
			console.log("Paper beats rock. You lose this round!");
			return "Paper beats rock. You lose this round!";
		}
		else {
			++playerScore;
			console.log("Rock beats scissors. You win this round!");
			return "Rock beats scissors. You win this round!";
		}
	}
	else if (playerSelection.toLowerCase() === "paper") { //If player chooses PAPER.
		if (computerSelection === "rock") {
			++playerScore;
			console.log("Paper beats rock. You win this round!");
			return "Paper beats rock. You win this round!";
		}
		else {
			++computerScore;
			console.log("Scissors beat paper. You lose this round!");
			return "Scissors beat paper. You lose this round!";
		}
	}
	else if (playerSelection.toLowerCase() === "scissors") { //If player chooses SCISSORS.
		if (computerSelection === "rock") {
			++computerScore;
			console.log("Rock beats scissors. You lose this Round!");
			return "Rock beats scissors. You lose this Round!";
		}
		else {
			++playerScore;
			console.log("Scissors beat paper. You win this round!");
			return "Scissors beat paper. You win this round!";
		}
	}
}

// function game() { //Plays 3 games of Rock Paper Scissors.
// 	for (let i = 0; i < 3; i++) {
// 		playRound(playerSelection, computerPlay());
// 	}
// 	if (playerScore > computerScore) {
// 		playerScore = 0;
// 		computerScore = 0;
// 		return "YOU WIN!";
// 	}
// 	else if (playerScore < computerScore) {
// 		playerScore = 0;
// 		computerScore = 0;
// 		return "YOU LOSE!";
// 	}
// 	else {
// 		playerScore = 0;
// 		computerScore = 0;
// 		return "IT'S A TIE!";
// 	}
// }

function game() { //Plays games of Rock Paper Scissors until someone wins with 3 points.
	let keepGoing = true;
	while (keepGoing) {
		playRound(playerSelection, computerPlay());
		if (playerScore === 3) {
			keepGoing = false;
			playerScore = 0;
			computerScore = 0;
			return "YOU WIN!";
		}
		else if (computerScore === 3) {
			keepGoing = false;
			playerScore = 0;
			computerScore = 0;
			return "YOU LOSE!";
		}
	}
}