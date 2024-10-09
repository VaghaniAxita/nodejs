const {  Multiplaction, Division, Modulo, Sum, Subtract } = require("./math");
const prompt = require("prompt-sync")();

console.log("+ for Sum \n- for Subtract \n* for Multiplication \n/ for Division \n% for Modulo");

let opr = prompt();
if (opr == 1) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log("Sum:", Sum(a, b));
} else if (opr == 2) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log("Sub:", Subtract(a, b));
} else if (opr == 3) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log("Multi:", Multiplaction(a, b));
} else if (opr == 4) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log("Div:",Division(a, b));
} else if (opr == 5) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log("Mod:", Modulo(a, b));
} else {
    console.log("Invalid input. Please enter a valid operation number.");
}