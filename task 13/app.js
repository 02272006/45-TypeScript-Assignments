// Making an array
var f_trans = ['Civic', 'Aqua', 'Meera', 'Corolla', 'Audi', 'HiJet'];
/*console.log ("Cars are my favourite transport and I'd love to own one of these:");
for (let i = 0; i< f_trans.length; i++){
    console.log (f_trans [i]);
};*/
f_trans.forEach(function (f_trans) {
    console.log("I would like to own a ".concat(f_trans, "."));
});
