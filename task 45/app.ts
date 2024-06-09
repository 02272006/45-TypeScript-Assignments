// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.


// code
function cars(
    manufacturer :string, model :string, ...items:[string,any][]) 
    {
    let car :
    {
        manufacturerName:string,
        modename:string,
        item:[string,any][]
    }
     = 
    {
        manufacturerName:manufacturer,
        modename:model,
        item:items
    }
    
    console.log(
        ` Manufacturer: ${manufacturer}`
    );
    console.log(
        `Model: ${model}`
    );
    items.forEach(
        ([key,value]) =>console.log(
            `${key} ${value}`
        )
    );
    return car;
}

cars(
    "Toyota","Corolla",["Color:","BLack"]
);
cars(
    "Honda","Civic 2024", ["color:","Ash Grey"],["Engine:","158hp"]
);
cars(
    "Mercedes","Mercedes-Benz G-Class",
    ["color:"," 136 mph"],
    ["Seating capacity:","5"],
    ["Speed:"," 136 mph"]
);