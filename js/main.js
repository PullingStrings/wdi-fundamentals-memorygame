console.log("up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push("cardOne");
cardsInPlay.push("cardTwo");

console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);

if (cardsInPlay.length === 2){
	alert("You have found a match!");
    }
	else if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You have found a match!");
	}
	else {
		alert("Sorry, try again");
	}

