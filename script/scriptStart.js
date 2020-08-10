console.log(document.getElementById("input1").value);

//Bei Click auf eine Farbauswahl
for(let i=0;i<colorSelection.length;i++){
	for(let j=0;j<colorSelection[i].getElementsByTagName("img").length;j++){
		colorSelection[i].getElementsByTagName("img")[j].onclick = function(){
			changeColor(i,j,this);
		} 
	}
}

function changeColor(playerNr, colorNr,elm){
	
	if( 
		!(
		playerNr == 0 && playerArr[1][1] == colors[colorNr] ||
		playerNr == 1 && playerArr[0][1] == colors[colorNr]
		)
	){
		playerArr[playerNr][1] = colors[colorNr];

		for(let y=0;y<colorSelection[playerNr].getElementsByTagName("img").length;y++){
			colorSelection[playerNr].getElementsByTagName("img")[y].className = "";
		}
		elm.className = "selected";
	}
}

//Start Game
window.onkeydown = function(e) {
	if(e.keyCode == 13){
		startGame();
	}
}
continueText.onclick = startGame;


function startGame(){

	//Game einstellungen
	playerArr[0][0] = input1.value;
	playerArr[1][0] = input2.value;
	currentPlayer=2;
	changePlayer();
	
	//Hide Screen
	
	startScreen.style.top = "-100%";
	setTimeout(() => { 
		startScreen.style.display = "none";
	}, 800);
}