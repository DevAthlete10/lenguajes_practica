//  FUNCIÓN ESTANDAR DECLARATIVA
function funcion_estandar(){
    console.log(`Soy una función estandar`)
}
function funcion_estandar_parametro(nombre = "Cristobal"){
    console.log(`Soy una función estandar con parámetro ${nombre}`)
}


// FUNCIÓN ANÓNIMA EN VARIABLE
const funcion_anonima = function(){ 
    console.log("Soy una función anonima")
}
const funcion_anonima_parametro = function(nombre = "Cristobal"){ 
    console.log(`Soy una función anonima con parámetro ${nombre}`)
}


// FUNCIÓN TIPO FECHA EN VARIABLE
const funcion_flecha = () => { 
    console.log(`Soy una función tipo fecha`)
}
const funcion_flecha_parametros = (nombre) => { 
    console.log(`Soy una función tipo fecha con parámetro ${nombre}`)
}
const funcion_flecha_simplificada = () => console.log(`Soy una funcion fecha simplificada`);
const funcion_flecha_simplificada_parametro = parametro => console.log(`Soy una funcion fecha simplificada con parámetro ${parametro}`);


// INVOCAR FUNCIONES
funcion_estandar();
funcion_estandar_parametro("Crisss");

funcion_anonima();
funcion_anonima_parametro("Nicolas");

funcion_flecha();
funcion_flecha_parametros("Nicolas");
funcion_flecha_simplificada();
funcion_flecha_simplificada_parametro(parametro = "PARAMETRO");


// TIPS PARA + DE UN ARGUMENTOS 
const usuario = (nombre, edad) => ({nombre,edad});
const new_usuario = usuario("Cristobal",27);
const {nombre,edad:viejo} = usuario("Cristobal",27);
console.log(new_usuario);
console.log({nombre,viejo});


const argumentos = (nombre, ...args) =>{
    return (args)
}


const resp = argumentos("cristobal", 20,3,true,false);
const [age,hijos,casado] = argumentos("cristobal", 20,3,true,false);
console.log(resp);
console.log({age,casado,hijos});


(() => console.log("funcion anonima autoinvocada"))()