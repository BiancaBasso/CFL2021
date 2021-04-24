let readlineSync = require("readline-sync");
let usuario = "Juan";
let clave = "claveJuan";
let comprobarUsuario = readlineSync.question("Ingresar nombre de ususario:");
let comprobarClave = readlineSync.question("Ingresar clave:");
if (comprobarUsuario && comprobarClave == usuario && clave) {
    console.log("bienvenido al sistema Juan");
} else {
    console.log("El Usuario o Clave son incorrectos")};