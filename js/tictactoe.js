//variables to managing players and turn
var players = [];
var markers = ["X", "O"];
var points = [];
var whoseTurn = 0; 
//win values to determine the status of the game
var winValues = [7,56,73,84,146,273,292,448];
var gameOver; 
//sound effects
var winTone = new Audio('soundEffects/winTone.wav');
var failTone = new Audio('soundEffects/failTone.wav');

var status = document.getElementById("game-message");
//Get the player information
function grabNames() {
	players[0] = document.getElementById('player-1').value;
	players[1] = document.getElementById('player-2').value;
	for (var i = 0; i < players.length; i++) {
		if(players[i] === ""){
		players[i] = "player "+ (i+1);
		}
	}
	status.innerText = players[whoseTurn] + "'s Turn!";
	document.getElementById("name-form").style.display = "none";
}
//Game board
function drawBoard() {
	status.innerText = "Tic Tac Toe";
	var display = "";
	var binCount = 1;
	for (var i = 1; i <= 3; i++) {
		display += '<div id="row-' + i + '">';
		for (var j = 0; j < 3; j++) {
			display += '<div class="cell" onclick="play(this,' + binCount + ');"></div>';
			binCount *= 2;
		}
		display += '</div>';
	}
	document.getElementById("game-board").innerHTML = display;
}
//Start Game or Rest the game
function startGame(){
	document.getElementById("name-form").style.display = "block";
	document.querySelector('.endGame').style.display = "none";
  	document.querySelector('.endGame .endGame-text').innerText =""; 
	gameOver = false;
	points = [0, 0];
	drawBoard();
}
// display the game Status
function gameStatus(message = false){
	if(!message){
	status.innerText = players[whoseTurn] + "'s Turn!";
	}else{
	status.innerText = message;	
	}	
}
//play the game
function play(clickedDiv, divValue){
	if(!gameOver){
		points[whoseTurn] += divValue;
		clickedDiv.onclick = "";
		clickedDiv.innerHTML = "<span>" + markers[whoseTurn] + "</span>";
		winCheck();
		if(!gameOver){toggle();}
	}
}
// Track player to display whose turn is it?
function toggle(){
	whoseTurn = (whoseTurn ? 0 : 1);
	gameStatus();
}
//check for winner
function winCheck(){
	for(var i = 0; i < winValues.length; i++){
		if((points[whoseTurn] & winValues[i]) == winValues[i]){
			winTone.play();
			gameStatus(players[whoseTurn] + " won !"); 
			setTimeout(function(){
			document.querySelector('.endGame').style.display = "block";
			document.querySelector('.endGame .endGame-text').innerText = players[whoseTurn] + " won against " + players[+!whoseTurn] + "!";
			document.querySelector('.endGame').style.backgroundColor = "rgb(0, 153, 0)";}, 2000);
			gameOver = true;
		}
	}
	//check for the Draw game
	if (((points[0] + points[1]) == 511) && !gameOver){
		failTone.play();
		setTimeout(function(){
			document.querySelector('.endGame').style.display = "block";
			document.querySelector('.endGame .endGame-text').innerText = "GAME DRAW";
			document.querySelector('.endGame').style.backgroundColor = "rgb(255, 121, 77)";
			}, 1000);
		gameOver = true;
	}
}
