console.log("up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
	if (cardsInPlay.length === 2){
	alert("You have found a match!");
    }
	else if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You have found a match!");
	}
	else {
		alert("Sorry, try again");
	}
}
var flipCard = function(cardID){
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);

checkForMatch();

}
flipCard(0);
flipCard(2);
