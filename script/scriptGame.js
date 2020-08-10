
/*Jeder Spalte ein onclick vergeben */
for(let i=0;i<sections.getElementsByTagName("div").length;i++){
	sections.getElementsByTagName("div")[i].onclick = function(){

		if(coinsPlaced[i]<fieldRow){ //Wenn kein Platz mehr ist	
			placeCoin(i);
			win = evaluate();	
			if(win != 0){ //Wenn gewwonnen wurde
				showWinScreen(win);
			}
			else{
				changePlayer();
			}
		}
	}
}

function placeCoin(fieldNr){ //neuen Coin einfügen
	
	var img = new Image();
	document.getElementById("coins").appendChild(img);
	img.src="image/coins/coin_" + playerArr[currentPlayer-1][1] + ".svg";

	//Ort bestimmen
	img.style.left = ((100/fieldCol) * fieldNr) + "%";
	img.style.top = ((100/fieldRow) * ((fieldRow-1) - coinsPlaced[fieldNr])) + "%";
	//fallgeschwindigkeit anpassen
	img.style.animationDuration = ((fieldRow - coinsPlaced[fieldNr])*0.1) + "s";
	
	//im Array eintragen
	coins[(fieldRow-1)-coinsPlaced[fieldNr]][fieldNr] = currentPlayer;

	imgArray[(fieldRow-1)-coinsPlaced[fieldNr]][fieldNr] = img;

	coinsPlaced[fieldNr]++;
	
}

function changePlayer(){
	if(currentPlayer == 1){
		currentPlayer = 2;
	}
	else if(currentPlayer == 2){
		currentPlayer = 1;
	}
	
	//change Arrow color
	for(var j=0;j<arrows.length;j++){
		arrows[j].src = "image/coins/select_" + playerArr[currentPlayer-1][1] + ".svg";
	}
	
	//change info
	infoName.textContent = playerArr[currentPlayer-1][0] + "'s turn";
	infoCoin.src = "image/coins/coin_" + playerArr[currentPlayer-1][1] + ".svg";
}

function showWinScreen(winner){
	sections.style.display = "none";
	coinField.style.zIndex = 30;
	
	//Coins färben und vergrößern
	setTimeout(() => { 
		for(var j=0;j<fieldRow;j++){
			for(var y=0;y<fieldCol;y++){
				if(imgArray[j][y]!=null){ //sättung reduzieren
					imgArray[j][y].style.webkitFilter = "grayscale(0.7)";
				}
			}	
		}
		
		if(winner != 3){
			for(var i=0;i<4;i++){			
				imgArray[winningCoins[i][0]][winningCoins[i][1]].style.webkitFilter = "grayscale(0)";

				imgArray[winningCoins[i][0]][winningCoins[i][1]].style.transform = "scale(1.2)";
			}
		}
	}, 400);
	
	if(winner == 3){
		endText.textContent = "draw!";
	}
	else{
		endText.textContent = playerArr[winner-1][0] + " won!";
	}
	
	endScreen.style.display = "block";
	setTimeout(() => { 
	endScreen.style.opacity = 1;
	}, 2200);
}