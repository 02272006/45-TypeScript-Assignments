// . T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
// Code 1..
// function makeShirt(size: string, msg : string); void {
//     console.log (`we have "${size}" T-shirts, with the "${msg}" on them!`)
// }
// makeShirt ("small","It is what It is!");
// makeShirt ("medium","Way to go!);
// makeShirt ( "large","Eat. Sleep. Code. Repeat!");
//Code 2...
function makeShirt(size, message) {
    return "I am making a ".concat(size, " shirt with the message: \"").concat(message, "\"");
}
// Calling the function and storing the result in a variable
var shirtDescription = makeShirt('Medium', 'Save money. Live better.');
var shrtDescription = makeShirt('small', 'First, solve the problem...');
var shirtDscription = makeShirt('large', 'Make it work, make it right, make it fast.');
// Printing the variable containing the description
console.log("\n    ".concat(shirtDescription, " \n    ").concat(shrtDescription, "\n    ").concat(shirtDscription, "\n    "));
