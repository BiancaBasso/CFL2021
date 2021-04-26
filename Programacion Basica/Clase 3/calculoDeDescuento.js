// Entrada
let readlineSync = require("readline-sync");
let precioProducto = readlineSync.question("ingrese precio del producto");
let descuentoProducto = readlineSync.questionInt("ingrese descuento");
//Proceso
let descuento = precioProducto * descuentoProducto;
let precioFinal = precioProducto - descuentoProducto;
// Salida
console.log(precioFinal);