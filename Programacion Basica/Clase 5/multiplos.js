let readlineSync = require("readline-sync");
let contador; 
    for (contador =1; contador <= 100; contador++){
        if (contador %2 == 0){
            console.log(contador, "es multiplo de 2 && de 3")
        }
    }