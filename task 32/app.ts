// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//code...
let curr_users: string [] = ['Levi','Louis','Peter','Fyodor','Kevin'];
let newUsers : string [] = ['Jacob','Kevin','Alexie','Emma','Oscar'];

for (let i = 0; i < newUsers.length; i++){
    let unoccupied = true;
    for (let crr_users of curr_users){
        if (newUsers[i].toLocaleLowerCase() === crr_users.toLocaleLowerCase()){
            console.log (
                `Username ${newUsers[i]} is already taken, Please choose an another username.`
            );
             unoccupied = false 
             break;
        }
    }
    if (unoccupied){
        console.log (`Username ${newUsers[i]} is unoccupied!`);
    }
};