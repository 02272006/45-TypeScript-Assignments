// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//code...
var curr_users = ['Levi', 'Louis', 'Peter', 'Fyodor', 'Kevin'];
var newUsers = ['Jacob', 'Kevin', 'Alexie', 'Emma', 'Oscar'];
for (var i = 0; i < newUsers.length; i++) {
    var unoccupied = true;
    for (var _i = 0, curr_users_1 = curr_users_2; _i < curr_users_1.length; _i++) {
        var curr_users_2 = curr_users_1[_i];
        if (newUsers[i].toLocaleLowerCase() === curr_users_2.toLocaleLowerCase()) {
            console.log("Username ".concat(newUsers[i], " is already taken, Please choose an another username."));
            unoccupied = false;
            break;
        }
    }
    if (unoccupied) {
        console.log("Username ".concat(newUsers[i], " is unoccupied!"));
    }
}
;
