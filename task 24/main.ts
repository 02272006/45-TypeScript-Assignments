/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/


//code...
// Equality with strings
console.log
("Testing equality with strings:");
console.log("Mango" == "Mango"); // True
//console.log("Mango" == "mango"); // False

// Testing the lower case function
console.log
("Testing with lower case:");
console.log("Mango".toLowerCase() == "Mango"); // True

// Testing with numericals
console.log
("Testing Numerical:");
console.log(5 > 2); // True
console.log(3 < 1); // False

// Using "and" and "or" operators
console.log
("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true , false); // True

// Testing whether an item is in an array
let Vegies = [
    "Capsicum",
    "Scallions",
    "Potato"
    ];
console.log
("Is 'scallions' in Vegies?");
console.log(Vegies.includes("Scallions")); // True

// Testing if an item is not in an array
console.log
("Is 'Onion' not in Vegies?");
console.log(Vegies.includes("Scallions")); // True
