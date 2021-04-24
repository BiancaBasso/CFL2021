//Declaro variables
let readlineSync = require('readline-Sync');
let monto;
let montoConDescuento;
let Descuento;
let cantidad;
let precioTotal;
monto = readlineSync.questionFloat("ingresar monto:");
cantidad = readlineSync.questionFloat("ingresar cantidad:");
precioTotal = monto * cantidad;
if(precioTotal >= 1000) {
    descuento = (precioTotal * 10)/100;
    montoConDescuento = precioTotal - descuento;
    console.log("por gastar mas de 1000 tiene un 10% de descuento.");
    console.log("el monto a pagar es:" + montoConDescuento); 
    } else {
        console.log("no tiene descuento. El monto a pagar es:" + precioTotal);
    }