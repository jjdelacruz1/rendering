
function renderNametags(nametags) {
    // return `    original code to put names on a tag...
    //     <div class="text-center mt-5">
					
		// 		<div style="
		// 			color: white;
		// 			background-color: blue;
		// 			">Hello, my name is:</div>
		// 			<div style="
		// 			text-align: center">
		// 			${nametags}
		// 			</div>
					
    //     </div>
		// `
		
		function createNameTag (name) {
			for (var i = 0; i < name.length; i++){
			return `<div class="text-center mt-5">
							<div class="nameTagTop">Hello, my name is:</div>
							<div class="nameTagBottom">${nametags[i]}</div>
							</div>`
						}
		}
		let newNameTag = nametags.map(createNameTag)

		return newNameTag.join("")
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}