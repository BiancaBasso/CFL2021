let readlineSync = require('readline-sync');
let vuelta1 = readlineSync.questionInt("ingrese la vuelta 1:");
let vuelta2 = readlineSync.questionInt("ingrese la vuelta 2:");
let vuelta3 = readlineSync.questionInt("ingrese la vuelta 3:");
let vuelta4 = readlineSync.questionInt("ingrese la vuelta 4:");
let tiempoTotal = (vuelta1+vuelta2+vuelta3+vuelta4);
console.log("tiempo total:",tiempoTotal);
let tiempoPromedio = (tiempoTotal/4);
console.log("tiempoPromedio:", tiempoPromedio);