//  Unchanged Magicians: Start with your work from Exercise 41. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// array from exercise *41:
var Magicians = [
    'Cardabra Kid',
    'Azura',
    'Alistair',
    'Merlin',
    'Houdini',
];
//function to make magicians great:
function make_great(Magicians) {
    var great_magics = [];
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magicians = Magicians_1[_i];
        great_magics.push("Great" + magicians);
    }
    return {
        great_magics: great_magics
    };
}
;
// function to show magicians:
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_2 = Magicians; _i < Magicians_2.length; _i++) {
        var magicians = Magicians_2[_i];
        console.log(magicians);
    }
}
;
// Calling the function to make magicians great store the result in a new array:
var great_magics_array = make_great(__spreadArray([], Magicians, true));
// console.log (`${great_magics_array}
// Calling the function to show original magicians:
console.log("Original Magicians:");
show_magicians(Magicians);
// Calling the function to show great magicians:
console.log("Great Magicians:");
show_magicians(great_magics_array);
