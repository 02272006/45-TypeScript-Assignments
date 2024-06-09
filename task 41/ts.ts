//  Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.


// code..
// Making an array of magicians names:
let Magicians : string[] = [
    'Cardabra Kid',
    'Azura',
    'Alistair',
    'Merlin',
    'Houdini',
];
 // function to show magicians name
 function show_magicians (Magicians : string[]): void {
    for (let magician of Magicians) {
        console.log (magician);
    }
 }
 // calling the function:
 show_magicians (Magicians);