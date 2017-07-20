console.log("up and running!");

var cards = [
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-hearts.png",
 },
 {
 	rank: "queen", 
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png",
 },
 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png",
 },
 {
 	rank: "king", 
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png",
 },
 ];
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
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);

checkForMatch();

}
flipCard(0);
flipCard(2);
