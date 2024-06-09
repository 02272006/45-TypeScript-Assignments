//Think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.



//code...
let Novel: {
     title: string; author: string; Publishedyear: number 
    } = 
{
    title: "No Longer Human",
    author: "Osamu Dazai",
    Publishedyear: 1948
};
console.log(
    `The Novel ${Novel.title} by ${Novel.author}, was published in ${Novel.Publishedyear}`
);
