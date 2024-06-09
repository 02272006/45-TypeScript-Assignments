var guests = ["Amna", "Hamza", "Mona"];
console.log("Good news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Jack");
guests.splice(guests.length / 2, 0, "Lily");
guests.push("Rachel");
guests.forEach(function (guest) {
    console.log("Hey ".concat(guest, ", would you like to join me for dinner?"));
});
