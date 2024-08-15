import Factorizacion from "./1.aritmetica/factorizacion.js";
import NumerosReales from "./1.aritmetica/numeros_reales.js";
import {Angulo, tipoDeSistema} from "./geometria-y-trigonometria/angulos.js";


const numerosReales = new NumerosReales();
const angulo = new Angulo();

const factorizacion = new Factorizacion();

const numerosPrimosDelNumero = factorizacion.factorizacionPrima(1386);

console.log(numerosPrimosDelNumero);

