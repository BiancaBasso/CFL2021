let readlineSync = require("readline-sync")
let clave = "eureka";
let contador = 1;

for(contador <= 3 && clave == "eureka"){
    let clave = readlineSync.question("ingrese la clave alfabetica");
    if (clave == "eureka");{
        console.log("Ud ingreso con exito")
    } else {
        console.log("ud,agoto las oportunidades")
}