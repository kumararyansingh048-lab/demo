//object
let human1 = {
    firstName:"Rohit",
    lastName:"Sharma"
}

console.log(human1);
console.log(human1.firstName); // dot notation : preferrable
console.log(human1["lastName"]); // array notation

human1.firstName = "Mohit";
console.log(human1.firstName); // dot notation : preferrable

human1["lastName"] = "Verma"
console.log(human1["lastName"]); // array notation
// human1.showName();

human1.lastName="Final Change";
console.log(human1.lastName);


//mango

let mango = {
    color: "red",
    weight: 2,
    weightUnit:"Kg"
}

console.log(mango);

mango.color="yellow";
console.log(mango);

console.log(mango.weight);
console.log(mango["weightUnit"]);