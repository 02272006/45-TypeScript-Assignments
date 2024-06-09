// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

// code...
// making a function 
function makesandwiches (...ingr_dients: string[] ): string {
    if (ingr_dients.length === 0) {
        return "This is a homemade sandwich!";
    }
    const sandwich = `A delicious sandwich with ${ingr_dients.join(', ')}`;
  return ingr_dients.length === 1 ? `${sandwich} on bread.` : `${sandwich} on bread.`;
}
// Calling the function with different numbers of arguments
console.log(makesandwiches()); //the output => this is a homemade sandwich!
console.log(makesandwiches("cheese")); 
console.log (makesandwiches("tomato", "lettuce", "mayo")); 
