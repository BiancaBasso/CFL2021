Let readlineSync = require("readline-sync");
let ingresoClave = readlineSync.question("ingresar la clave");
let clave = "Eureka";
let intento = 1;
while ((ingresoClave != clave) && (intento < 3)) {
    intento++;
    ingresoClave = readlineSync.question("ingresar la clave"); 
}
if (ingresoClave == clave){
    console.log("ah ingresado con exito")
} else {
    console.log("se agoto las oportunidades");
}