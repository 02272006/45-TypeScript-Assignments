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
function makeShirt(size: string, message: string): string {
    return `I am making a ${size} shirt with the message: "${message}"`;
  }
  
  // Calling the function and storing the result in a variable
let shirtDescription = 
  makeShirt('Medium', 'Save money. Live better.');
let shrtDescription =
  makeShirt('small','First, solve the problem...');
let shirtDscription =
  makeShirt('large','Make it work, make it right, make it fast.')

  // Printing the variable containing the description
  console.log(`
    ${shirtDescription} 
    ${shrtDescription}
    ${shirtDscription}
    `);
  