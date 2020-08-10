function evaluate(){
	var status = 0;
	
	for(var r=0;r<fieldRow;r++){ //Horizontal überprüfen
		for(c=0;c<fieldCol-3;c++){
			if(coins[r][c]==coins[r][c+1] &&
			   coins[r][c]==coins[r][c+2] &&
			   coins[r][c]==coins[r][c+3] &&
			   coins[r][c]!=0
			  ){
			  	status = coins[r][c];
				winningCoins = [
					[r,c],
					[r,c+1],
					[r,c+2],
					[r,c+3],
				];
			}
		}
	}
	
	for(c=0;c<fieldCol;c++){ //Vertikal überprüfen
		for(r=0;r<fieldRow-3;r++){
			if(coins[r][c]==coins[r+1][c] &&
			   coins[r][c]==coins[r+2][c] &&
			   coins[r][c]==coins[r+3][c] &&
			   coins[r][c]!=0
			  ){
			  	status = coins[r][c];
				winningCoins = [
					[r,c],
					[r+1,c],
					[r+2,c],
					[r+3,c],
				];
			}
		}
	}
	
	for(var r=0;r<fieldRow-3;r++){ //schräg links
		for(c=0;c<fieldCol;c++){
			if(coins[r][c]==coins[r+1][c+1] &&
			   coins[r][c]==coins[r+2][c+2] &&
			   coins[r][c]==coins[r+3][c+3] &&
			   coins[r][c]!=0
			  ){
			   status = coins[r][c];
				winningCoins = [
					[r,c],
					[r+1,c+1],
					[r+2,c+2],
					[r+3,c+3],
				];
			}
		}
	}
	
	for(var r=3;r<fieldRow;r++){ //schräg rechts
		for(c=0;c<fieldCol;c++){
			if(coins[r][c]==coins[r-1][c+1] &&
			   coins[r][c]==coins[r-2][c+2] &&
			   coins[r][c]==coins[r-3][c+3] &&
			   coins[r][c]!=0
			  ){
			   status = coins[r][c];
				winningCoins = [
					[r,c],
					[r-1,c+1],
					[r-2,c+2],
					[r-3,c+3],
				];
			}
		}
	}
	
	//Auf unentscheiden kontrollieren
	var chechDraw = true;
	for(var r=0;r<fieldRow;r++){ //schräg rechts
		for(c=0;c<fieldCol;c++){
			if(coins[r][c] == 0)
				chechDraw = false;
		}
	}
	if(chechDraw)
		status = 3;
	
	return status;
}