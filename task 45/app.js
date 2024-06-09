// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
// code
function cars(manufacturer, model) {
    var items = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        items[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturerName: manufacturer,
        modename: model,
        item: items
    };
    console.log(" Manufacturer: ".concat(manufacturer));
    console.log("Model: ".concat(model));
    items.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return console.log("".concat(key, " ").concat(value));
    });
    return car;
}
cars("Toyota", "Corolla", ["Color", "BLack"]);
cars("Honda", "Civic", ["color", "Ash Grey"], ["Engine", "35hp"]);
cars("Mercedes", "Mercedes-Benz G-Class", ["color", " 136 mph"], ["Seating capacity", "5"], ["Speed", " 136 mph"]);
