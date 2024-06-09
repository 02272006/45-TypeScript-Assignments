var guests = ["Amna", "Hamza", "Mona"];
//console.log("Good news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Jack");
guests.splice(guests.length / 2, 0, "Lily");
guests.push("Rachel");
guests.forEach(function (guest) {
    //  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// shrinking guests list 
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
