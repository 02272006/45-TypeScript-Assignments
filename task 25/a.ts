/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)*/


//code...
// Version 01: The alien's color is green so it shall pass the test..
let alien_clr = 'Green';
if ( alien_clr === 'Green'){
    console.log("Congrats! You just earned 5 points!");
}

// Version 02: The alien's color isn't Green so it will fail the test..
alien_clr = 'Yellow';
if ( alien_clr === 'Green'){
    console.log("Congrats! You just earned 5 points!");
    // there will be No output due to the false condition
    }