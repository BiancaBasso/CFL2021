let readlineSync = require('readline-sync');
let length = readlineSync.questionInt('ìngrese el valor de la dimencion:');
let number = new array (length);
for (i = 0;i < length; i++){
    number [i] =
readlineSync.questionInt('ingrese un numero entero:');
}
for (i = (length-1); i >=0;i--){
    console.log(number [i]);
}