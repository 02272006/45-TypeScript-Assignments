/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

//code..
//Version 01:
let alienclr : string = 'Green';
if (alienclr==='Green'){
    console.log ("Congrats! You just earned 5 points.");
} else {
    console.log ("The Player has earned 10 points!");
}

//Version 02: 
alienclr = 'Yellow';
if ( alienclr=== 'Green'){
    console.log ("Congrats! You just earned 5 points.");
} else {
    console.log ("The player has earned 10 points!");
}