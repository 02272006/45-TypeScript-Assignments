/* Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”*/


//code...
let f_trans : string [] =[
    'Civic','BMW','Audi','Mercedes'
];
 f_trans.forEach(
    f_trans => {
    console.log(`I would like to own a ${f_trans}.`);
});
