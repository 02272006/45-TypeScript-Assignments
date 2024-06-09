//  Unchanged Magicians: Start with your work from Exercise 41. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name

// array from exercise *41:
let Magicians : string[] = [
    'Cardabra Kid',
    'Azura',
    'Alistair',
    'Merlin',
    'Houdini',
];
//function to make magicians great:
function make_great (Magicians: string[])
 {
    let great_magics: string[] = [];
    for (let magicians of Magicians){
        great_magics.push ( `Great` + magicians
        );
    } return {
        great_magics
    }};
// function to show magicians:
function show_magicians (Magicians : string[]) {
    for (let magicians of Magicians) {
        console.log (magicians)
    }
};
// Calling the function to make magicians great store the result in a new array:
let great_magics_array = make_great ([
...Magicians
]) 
   // console.log (`${great_magics_array}
// Calling the function to show original magicians:
console.log ("Original Magicians:");
show_magicians (Magicians)

// Calling the function to show great magicians:
console.log ("Great Magicians:");
make_great (Magicians);