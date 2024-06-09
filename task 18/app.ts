/*.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

//Code..................
// Storing the location in an array
let Countries: string[] = [
  "Japan",
  "Canada",
  "South Korea",
  "France",
  "Italy",
  "Malaysia",
];
//Print your array in its original order.
console.log("Original order:", Countries);
// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [Countries].sort());
//Show that your array is still in its original order by printing it.
console.log("Original order:", Countries);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", [Countries].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log("Original order:", Countries);
//Reverse the order of your list. Print the array to show that its order has changed.
Countries.reverse();
console.log("Reversed order:", Countries);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
Countries.reverse();
console.log("Original order:", Countries);
//ort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
Countries.sort();
console.log("Alphabetical order:", Countries);
//ort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
Countries.reverse();
console.log("Reverse alphabetical order:", Countries);
