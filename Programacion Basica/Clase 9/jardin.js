let readlineSync = require("readline-sync");
let salaAzul = new Array(40);
let salaVerde = new Array(35);
let salaAmarrilla = new Array(30);
function asignarAulas(salaAzul,salaVerde,salaAmarrilla) {;
         let cantidad = readlineSync.question("ingrese el numero de infantes");
         if(cantidad >0) {;
             if(cantidad <= salaAmarrilla.length){;
                 return("los infantes iran a la sala amarrilla");
             }
             if(cantidad <= salaVerde.length){;
                 return("los infantes eran a la sala verde");
             }
             if (cantidad <= saleAzul.length){;
                 return ("los infantes iran a la sala azul");
        }
        
    }
}