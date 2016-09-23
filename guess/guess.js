$(document).ready(function() {
	//Game Variables
	var mysteryNumber = Math.ceil(Math.random() * 100);
	console.log(mysteryNumber);
	var playerGuess = 0;
	var guessesRemaining = 10;
	var guessesMade = 0;
	var gameState = "";
	var gameWon = false;
	
	//Input and Output
	var input = document.querySelector("#input");
	var output = document.querySelector("#output");
	
	//Button
	var button = document.querySelector("#button");
	
	button.addEventListener("click", clickHandler, false);
	button.style.cursor = "pointer";
	
	//Reset
	var reset = document.querySelector("#reset");
	
	reset.addEventListener("click", resetHandler, false);
	reset.style.cursor = "pointer";
	document.getElementById("end").style.visibility = "hidden";
	
	//Enter key
	window.addEventListener("keydown", keydownHandler, false);
	
	//Arrow multiply player guesss by 3 to get corrext pixel position on the scale
	var arrow = document.querySelector("#arrow");
	
	function render() {
		arrow.style.left = playersGuess * 3 + "px"
	}
	
	
	function keydownHandler(event) {
		if(event.keyCode === 13) {
			validateInput();
		}
	}
	
	function clickHandler() {
		validateInput();
	}
	
	function resetHandler() {
		location.reload();
	}
	
	function validateInput() {
		playersGuess = parseInt(input.value);
		if(isNaN(playersGuess)) {
			output.innerHTML = "Please enter a number.";
		} else {
			playGame();
		}
			
	}
	
	function playGame(){
		guessesRemaining--;
		guessesMade++;
		gameState = " Guess: " + guessesMade + ", Remaining: " +guessesRemaining;
		
		if(playersGuess > mysteryNumber) {
			output.innerHTML = playersGuess + " is to high." + gameState;
			input.value = "";
				//Check for end of the game
				if(guessesRemaining < 1) {
					endGame();
				}			
		} else if(playersGuess < mysteryNumber) {
			output.innerHTML = playersGuess + " is too low." + gameState;
			input.value = "";
				//Check for end of the game
				if(guessesRemaining < 1) {
					endGame();
				}
		} else if(playersGuess === mysteryNumber) {
			gameWon = true;
			endGame();
		}
		
	//Update the arrow display
	render();
		
	}
	
	function endGame() {
		if (gameWon) {
			output.innerHTML = "Yes it's " + mysteryNumber + "!" + "<br>" + "It only took you " + guessesMade + " guesses.";
		} else {
			output.innerHTML = "No more guesses left!" + "<br>" + "The number was: " + mysteryNumber + ".";
		}
		
		document.getElementById("start").style.visibility = "hidden";
		
		document.getElementById("end").style.visibility = "visible";
	}

});