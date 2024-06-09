/*. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
//Code....
// array isn't empty here
var user_names = [
    'Annabelle',
    'Elias',
    'Shawn',
    'Jimmy',
];
if (user_names.length == 0) {
    console.log("we need to find some more Users!");
}
else {
    for (var i = 0; i < user_names.length; i++) {
        console.log(user_names[i]);
    }
}
// array is empty
var usernames = [];
if (usernames.length == 0) {
    console.log("We need to find some more usernames");
}
else {
    for (var i = 0; i < usernames.length; i++) {
        console.log(usernames[i]);
    }
}
;
