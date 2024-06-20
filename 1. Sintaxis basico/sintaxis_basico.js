
console.log("hola mundo");

// COMENTARIO

// Comentario en una línea
/*
Comentario con
salto de línea
*/

// VARIABLES

// tipo_de_dato nombre_de_la_variable = dato;

// let
let a = 10;

// var
// Sobreescribe el objeto global window
// ideal para navegadores viejos
// produce el resultado undefined cuando se llama antes de ser inicializado
var b = 20;

// const 
const c = 30;

// CONSOLA

console.log("Hola","Mundo");

console.log({a,b,c});


// RUTAS HTML 

<script src="carpeta/sub_carpeta/archivo_js.js"></script>


// MENSAJES

alert("Hola mundo");

let nombre = prompt("¿Cuál es tu nombre?");

console.log(nombre);

let almacenar = confirm("¿Estás seguro de almacenar esto?")

console.log(almacenar);

// OPERADOR SPREAD APLICADO A VARIABLES

let usuario = {nombre:"pedro"};
let new_usuario = {...a};
new_usuario.nombre = "Bicho";

// OPERADOR SPREAD APLICADO A FUNCIONES

const cambiarNombre = ({...persona}) => {
    persona.nombre = "Cristobal";
    return persona;
};

let carlos = { nombre: "Carlos" };
let cristobal = cambiarNombre(carlos);

// OPERADOR SPREAD APLICADO A LISTAS

const nombres = ["Cristobal","Nicolas","Miguel"];
const otrosNombres = [...nombres];

// OPERADORES




// PALABRAS RESERVADAS