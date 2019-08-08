
function renderCircles(circles) {
	// HINT: You probably need to write a for loop!
	//       Or, if you're feeling fancy, use .map() 
	// let finalArr = []
	// for (let i = 0; i < circles.length; i++) {
	// 	let radius = circles[i].radius
	// 	let color = circles[i].color

	// 	let div = `<div style = border-radius: ${radius}%; background-color: ${color}; height: 25px; width: 25px;"></div>`
	// 	finalArr.push(div)
	// }
	
	// return finalArr
	function buildCircle(obj) {
		return `<div style = "border-radius: 50%; background-color: ${obj.color}; height: ${2 * obj.radius}px; width: ${2 * obj.radius}px"></div>`
	}
	let newArr = circles.map(buildCircle)

	return newArr.join("")
}

function circles() {
	var content = document.getElementById('content');

	var circlesAbstraction = [
			{
					radius: 50,
					color: "#FF00FF"
			},
			{
					radius: 30,
					color: "#FF99AA"
			},
			{
					radius: 60,
					color: "#0000FF"
			},
			{
					radius: 10,
					color: "#000000"
			},
	];

	content.innerHTML = renderCircles(circlesAbstraction);

}