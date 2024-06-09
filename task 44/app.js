// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makesandwiches() {
    var ingr_dients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingr_dients[_i] = arguments[_i];
    }
    if (ingr_dients.length === 0) {
        return "This is a homemade sandwich!";
    }
    var sandwich = "A delicious sandwich with ".concat(ingr_dients.join(', '));
    return ingr_dients.length === 1 ? "".concat(sandwich, " on bread.") : "".concat(sandwich, " on bread.");
}
// Calling the function with different numbers of arguments
console.log(makesandwiches()); // this is a homemade sandwich!
console.log(makesandwiches("cheese")); // Your delicious sandwich with cheese on bread.
console.log(makesandwiches("tomato", "lettuce", "mayo")); // Your delicious sandwich with tomato, lettuce, mayo on bread.
