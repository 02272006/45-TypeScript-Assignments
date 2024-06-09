// re-inviting guests #15
var unableToAttend = "Ash";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Orion";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
/*let guest_list: string[] = ["Amna", "Hamza", "Mona", "Ash"];
let not_present: string = "Ash";
let new_guest: string = "Orion";
let message: string = "Would you like to have a dinner with me this weekend?"
 {
  console.log (
    new_guest + message
  );
}*/
