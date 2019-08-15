
function renderArtist(albums) {
    let final = albums.map(buildArtist)
    // let finalAlbums = albums.map(showAlbum)
    return `
        <div class="text-center mt-5">
            <div>${final}</div>
        </div>
    `
}

function buildAlbums(data) {
      const albumTitle = data.albums
      for(var i = 0; i < albumTitle.length; i++){
            var albumTitleNew = albumTitle[i].title
            console.log(albumTitleNew) 
      }
      const albumCover = data.albums[0].albumCover
      const songTitle = data.albums[0].songs[0].title
      const songLength = data.albums[0].songs[0].length
      return `<li style="list-style: none"><img src="${albumCover}" style="width: 200px">${albumTitleNew}</li><hr>
             <li style="list-style: none">${songTitle} ${songLength}</li><hr>
      `
}

function buildArtist (obj) {
    const artistName = obj.artist
    const albumsHTML = buildAlbums(obj)
    return `<div>
              <h4>${artistName}</h4>
              <hr>
              <ul>
                ${albumsHTML}
              </ul>
            </div>
              `
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderArtist(albumsAbstraction);

}