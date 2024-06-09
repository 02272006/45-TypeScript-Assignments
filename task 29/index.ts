/*• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement.
*/

// code....
//Making an array
let Fav_fruits : string [] =
 [
    "Pomegranate",
    "Guava",
    "Peach",
 ];
// Statement 01:
if (Fav_fruits.includes ('Pomegranate')){
    console.log ("I really like pomegranates!");
} 
// statement 02
if ( Fav_fruits.includes ('Guavas')){
    console.log ("I really like Guavas!");
}
//statement 03
if (Fav_fruits.includes ('Peach')){
    console.log ("I really like Peaches!");
}
// statement 04
if (Fav_fruits.includes ('Cherry')){
    console.log ("I really like cherries!");
} else {
    console.log ("Cherries are not included in your favourite fruits list!");
}
//statement 05
if (Fav_fruits.includes ('Lychee')){
    console.log ("I really like lychees");
} else {
    console.log ("Lychees aren't included in your favorite fruits list!");
}