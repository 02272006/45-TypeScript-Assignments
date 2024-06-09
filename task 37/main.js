// Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size, message) {
    return "I'm making a \"".concat(size, "\" shirt, with the message: \"").concat(message);
}
var des = make_shirt("large", "I love TS!");
make_shirt('medium', 'Bad code cant be cleaned up!');
make_shirt("small", "Code all day!");
console.log(des);
