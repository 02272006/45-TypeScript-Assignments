// exercise 14
/*. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.
*/

//code...
let guests: string[] = [
  "Amna!", 
  "Hamza!", 
  "Mona!", 
  "Ash!"
];
let grt = "Hey";
let msg =
  "I Would love if you join me for dinner this weekend at sharp 9.Let me know if you can make it!";
for (
  let i = 0; i < guests.length; i++
) {
  console.log(grt + " " + guests[i] + "" + msg);
}
  
