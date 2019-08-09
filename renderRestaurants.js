function createRestaurant(name) {
	return `<div class="restFormat">
						<div>${name.name}</div>
						<div>${name.type}</div>
						<div>${name.priceRating}</div>
					</div>
            	`
}
function renderRestaurants(restaurants) {
  let review = restaurants.map(createRestaurant)
	console.log(review)
	let allReview = review.join("")
	let reviewWithWrapper = "<div class='restaurant'>" + allReview + "</div>"
  return reviewWithWrapper
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        }
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}