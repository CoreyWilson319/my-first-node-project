const { beBasic, add, subtract,addAgain } = require("./myModule");

let name = "Corey Wilson"
console.log(name)

function printName(person) {
    return `Hello, ${person}`;
}

console.log(printName(name));

console.log(beBasic());
console.log(add(5, 50))
console.log(subtract(10, 20))
console.log(addAgain(100, 199999))