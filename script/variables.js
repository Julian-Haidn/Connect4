//items of Startscreen
var startScreen = document.getElementById("startScreen");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var colorSelection = document.getElementsByClassName("colorSelection");
var continueText = document.getElementById("continueText");

//items of game
var arrows = document.getElementsByClassName("arrow");
var sections = document.getElementById("sections");
var coinField = document.getElementById("coins");
var infoName = document.getElementById("infoName");
var infoCoin = document.getElementById("infoCoin");

var endScreen = document.getElementById("endScreen");
var endText = document.getElementById("endText");


var fieldCol = 7;
var fieldRow = 6;

var coinsPlaced = [0,0,0,0,0,0,0]; //im Feld Platzierte Coins (grafisch)

var imgArray = [ //Speichert wo sich welches bild befindet (für win)
	[null,null,null,null,null,null,null,],
	[null,null,null,null,null,null,null,],
	[null,null,null,null,null,null,null,],
	[null,null,null,null,null,null,null,],
	[null,null,null,null,null,null,null,],
	[null,null,null,null,null,null,null,],
];
var winningCoins =[
	[0,0],
	[0,0],
	[0,0],
	[0,0],
]

var coins = [ //Coin Array für die auswertung
	[0,0,0,0,0,0,0,], // 0->kein Spieler, 1->Spieler 1, 2->Spieler 2
	[0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,],
];

var currentPlayer = 1;

var colors = ["green", "red", "orange", "pink", "cyan", "blue"];
var playerArr = [
	["Player 1","red",],
	["Player 2","orange",],
];

var playerColor = "green";
var win = 0; //0->continue, 1->Player 1 won, 2->Player 2 won, 3 -> draw