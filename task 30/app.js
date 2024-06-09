/*. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var user = [
    '_melodi3',
    'UwU002',
    'ADMIN',
    'ja_dein1',
    'daiski_ono'
];
for (var i = 0; i < user.length; i++) {
    if (user[i] == "ADMIN") {
        console.log("Hello ADMIN! would you like to see your insights?");
    }
    else {
        console.log("Hello, Thank you for logging in again!");
    }
}
