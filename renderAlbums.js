
function renderArtist(artistData) {
    let final = artistData.map(buildArtist)
    // let finalAlbums = albums.map(showAlbum)
    return `
        <div class="text-center mt-5">
            <div>${final}</div>
        </div>
    `
}

function buildSongs(songs) {
    console.log(songs)
}
function buildAllSongs(songs) {
    let songsString = "";
    for(var i = 0; i < songs.length; i++){
        songsString = songsString + buildSongs(songs[i]);
    }
    return songsString
}
function buildSigleAlbum(album) {
    // console.log(album);
    return `<li style="list-style: none"><img src="${album.albumCover}" style="width: 100px">${album.title}</li>`
}

function buildAllAlbums(albums) {
    
    let albumsString = "";
    for(var i = 0; i < albums.length; i++){
        albumsString = albumsString + buildSigleAlbum(albums[i]);
    }
    return albumsString;
}


function buildArtist (artistData) {
    const artistName = artistData.artist;
    const albums = artistData.albums;
    const albumsHTML = buildAllAlbums(albums);
    const songs = artistData.albums.songs.title;
    console.log(a)

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