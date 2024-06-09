class login 
{
    Data = "LOGIN DONE"
}


// Exc 12 Code: 
/* Greetings: Start with the array you used in Exercise 11, 
but instead of just printing each person’s name, print a message to them. 
The text of each message should be the same, 
but each message should be personalized with the person’s name.*/

// code...
let squad : string[] = 
 [
    'Ahmer',
    'Moiz',
    'Ashley',
    'Bilal'
 ];
let message : string = "How've you been doing? "
for (
    let i = 0 ; i< squad.length; i++
){
    console.log(squad[i] + ", " + message)
};

