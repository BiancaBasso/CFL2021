let readlineSync = require('readline-sync');
let v1 = new Array(6);
let v2 = new Array(6);
let resultado = new Array(6);
let i = 0
 
for (i = 0; i<6; i++){
    v1[i] = readlineSync.questionInt('ingrese un mun entero:')
    console.log('Ud.ingreso los siguientes numeros:' + v1);
}
for (i=0; i<6; i++){
    v2[i] = readlineSync.questionInt('ingrese un num entero:');
    console.log('Ud.ingreso los siguites numeros:' + v2);
}
for (i=0; i<6; i++){
    resultado[i] = v1[i] + v2[i];
    console.log("la suma de sus numeros es:" + resultado[i]);
}