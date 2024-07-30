import NumerosReales from "./1.aritmetica/numeros_reales.js";
import {Angulo, tipoDeSistema} from "./geometria-y-trigonometria/angulos.js";


const numerosReales = new NumerosReales();
const angulo = new Angulo();

let resp = numerosReales.esUnNumeroReal(0);

let convertirARadian = angulo.convertirGradoARadian(90);
let convertirAGrado = angulo.convertirARadianAGrado(3/3);

let convertirMinutoAGrado = angulo.convertirMinutoAGrado(47);
let convertirSegundoAGrado = angulo.convertirSegundoAGrado(23);

console.log(resp, convertirARadian, convertirAGrado);

console.log(19+convertirMinutoAGrado+convertirSegundoAGrado);


