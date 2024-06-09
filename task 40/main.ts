//  Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

// code..
type Album = {
    artist: string;
    title: string;
    tracks?: number;
  };
  // function
  function make_album(artist: string, title: string, tracks?: number): Album {
    return {
      artist,
      title,
      tracks,
    };
  }
  
// Creating albums
let selenaAlbum1 = make_album("Selena Gomez", "Rare", 11);
let charlieAlbum2 = make_album("Charlie Puth", "Voicenotes", 13);
let  demiAlbum3 = make_album("Demi Lovato", "Confident", 19);

//printing albums
console.log(selenaAlbum1);
console.log(charlieAlbum2);
console.log(demiAlbum3);

