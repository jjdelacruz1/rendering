function createCard(card) {
	return `<img class="size" src="cards/${card.value}${card.suit}.png">`
}



function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
	
	let allCards = pokerHand.map(createCard)
	console.log(allCards);
	let allCardsString = allCards.join("")
	let imgWithWrapper = "<div>" + allCardsString + "</div>";
	return imgWithWrapper;
}


function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}