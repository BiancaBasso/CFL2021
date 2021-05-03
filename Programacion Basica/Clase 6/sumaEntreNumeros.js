// SumaEntreNumeros
let readlineSync = require("readline-sync");
let num1 = readlineSync.questionInt("ingrese el primer numero");
let num2 = readlineSync.questionInt("ingresar el segundo numero");
suma = 0;
resultado = num1 
for(resultado = num1 <= num2; resultado++) {
    suma = suma + resultado ;
    }
    console.log("el resultado es:",suma);