//Define the make_Album Function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three function and creating 3 variable with different valuse 
let album1 = make_album("Waseem", "Album Title 1");
let album2 = make_album("Salal", "Album Title 2");
//Calling a make_album Function with third parameter
let album3 = make_album("Wahab", "Album Title 3", 9);
console.log(album1);
console.log(album2);
console.log(album3);
export {};
