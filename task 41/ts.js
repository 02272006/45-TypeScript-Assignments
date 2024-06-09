//  Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// code..
// Making an array of magicians names:
var Magicians = [
    'Cardabra Kid',
    'Azura',
    'Alistair',
    'Merlin',
    'Houdini',
];
// function to show magicians name
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(magician);
    }
}
// calling the function:
show_magicians(Magicians);
