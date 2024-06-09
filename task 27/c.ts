// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//code........
//Version 01: (Red alien)
let alienCL_r : string = 'Red';
if (alienCL_r === 'Red'){
    console.log ("You Earned 05 points!");
} else if (alienCL_r === 'Green'){
    console.log ("You just earned 10 points!");
} else if (alienCL_r === 'Yellow'){
    console.log ("You just earned 15 points!");
};

//Version 02: (Green Alien)
let alien_CLr : string = 'Green';
if (alien_CLr === 'Green'){
   console.log ("You just earned 05 points!");
} else if (
   alien_CLr === 'Red'
){
    console.log ("You just earned 10 points!");
} else if (
    alien_CLr === 'Yellow'
){
    console.log ("you just earned 15 points!");
};

//Version 03: (Yellow Alien)
let alienCLr = 'Yellow';
if (
    alienCLr === 'Yellow'
){
    console.log ("You just earned 05 points!");
} else if (
    alienCLr === 'Green'
){
    console.log ("You just earned 10 points")
} else if (
    alienCLr === 'Red'
){
    console.log ("You just earned 15 points!");
};