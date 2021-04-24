let readlineSync = require('readline-sync');
let base = readlineSync.questionInt("ingrese la base:");
let altura = readlineSync.questionInt("ingrese la altura"); area = base * altura;
console.log("el area es:",area);