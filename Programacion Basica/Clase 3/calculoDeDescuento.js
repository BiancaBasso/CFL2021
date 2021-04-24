let readlineSync = require("readline-sync");
let precioProducto = readlineSync.question("ingrese precio del producto");
let descuentoProducto = readlineSync.questionInt("ingrese descuento");
let descuento = precioProducto * descuentoProducto;
let precioFinal = precioProducto - descuentoProducto;
console.log(precioFinal);