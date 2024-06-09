//  Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// code from task 41
var Magicians = [
    'Cardabra Kid',
    'Azura',
    'Alistair',
    'Merlin',
    'Houdini',
];
//  // function to show magicians name
//  function show_magicians (Magicians : string[]) {
//     for (let magician of Magicians) {
//         console.log (magician);
//     }
//  }
//  // calling the function:
//  show_magicians (Magicians);
// code of task 42 starts here!
// Function to make magicians Great..
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = 'Great' +
            Magicians[i];
    }
}
// function to show magicians..
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(magician);
    }
}
// Calling the function to make magicians great
make_great(Magicians);
// Calling the function to see if the list has actually been modified..
show_magicians(Magicians);
