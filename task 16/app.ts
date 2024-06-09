// . More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


//code...
let guests: string[] = ["Amna", "Hamza", "Mona"];
console.log("Good news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Jack");
guests.splice(guests.length / 2, 0, "Lily");
guests.push("Rachel");

guests.forEach(guest => {
    console.log(`Hey ${guest}, would you like to join me for dinner?`);
});