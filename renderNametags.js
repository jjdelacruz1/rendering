
function renderNametags(nametags) {
    return `
        <div class="text-center mt-5">
					<div style="
					name: ${nametags}
					">
        </div>
    `
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