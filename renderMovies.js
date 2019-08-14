
function renderMovies(movies) {
    let final = movies.map(createMovie).join("")
    
    return `
        <div class="mt-5">
            <div>${final}</div>
        </div>
    `
}

function createMovie(name) {
    return `<div class="container-fluid">
                <div class="row" style="background-color:gray;">
                    <div class="col-12 mt-3">
                        <div class="card">
                            <div class="card-horizontal d-flex">
                                <div class="img-square-wrapper" style="padding: 10px;">
                                    <img src = "${name.poster}">
                                </div>
                                <div class="card-body style="text-align: left">
                                    <h4 class="card-title" style="font-size: 26px;">${name.title}</h4>
                                    <p class="card-text" style="font-size: 12px;">${name.year}</p>
                                    <p class="card-text" style="font-size: 36px;">IMDB: ${name.imdbRating} / 10</p>
                                    <p class="card-text" style="font-size: 36px;">Rotten Tomatoes: ${name.rottenTomatoesRating * 100}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}