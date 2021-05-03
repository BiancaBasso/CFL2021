let mensaje;
ambitoVariables();

function ambitoVariables(){
    mensaje = 'Hola Mundo!!';
    leeVariable();
}
function leeVariable(){
    console.log(mensaje);
}
let mensaje;
ambitoVariables();

function ambitoVariables(){
    leeVariable();
    mensaje = 'Hola Mundo!!';
}
function leeVariable(){
    console.log(mensaje);
}