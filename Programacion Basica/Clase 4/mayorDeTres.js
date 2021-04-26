let readlineSync = require('readline-sync');
let numero1 = readlineSync.questionInt("Ingresar el primer numero:");
let numero2 = readlineSync.questionInt("Ingresar el segundo numero:");
let numero3 = readlineSync.questionInt("Ingresar el tercer numero:");
if(numero1 > numero2 && numero1 > numero3){
    console.log("el numero" + numero1 + "es el mayor");
} else if(numero2 > numero1 && numero2 > numero3) {
    console.log("el numero" + numero2 + "es el mayor");
} else if(numero3 > numero1 && numero3 > numero2);{
    console.log("el numero" + numero3 + "es el mayor");
}