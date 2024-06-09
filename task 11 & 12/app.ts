export default class login 
{
    Data ="LOGIN DONE"
}


// Exc 11, Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.

//code...
let squad : string[] = [
    'Ahmer',
    'Moiz',
    'Ashlyn',
    'Bilal'
];
console.log ("Friend squad:");
for (
    let i = 0 ; i< squad.length; i++
){
    console.log(squad [i]);
};
