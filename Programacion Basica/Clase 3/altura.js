let readlineSync = require("readline-sync");
let alturaPersona = readlineSync.question("cual es su altura");
let pesoPersona = readlineSync.question("cual es su peso");
console.log("su altura es",alturaPersona);
console.log("su peso es",pesoPersona);