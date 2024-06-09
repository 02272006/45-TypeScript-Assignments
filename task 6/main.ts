/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/



// Code...

let p_name ="\t  Musfira\n";
console.log("Name with white spaces:");
console.log(p_name); 

let trimmedname:string = p_name.trim();
console.log("Name without white spaces:");
console.log(trimmedname);