import { Calculadora } from "./1.aritmetica/calculadora.js";
import Factorizacion from "./1.aritmetica/factorizacion.js";
import Fracciones from "./1.aritmetica/fracciones.js";
import NumerosReales from "./1.aritmetica/numeros_reales.js";
import {Angulo} from "./geometria-y-trigonometria/angulos.js";


const numerosReales = new NumerosReales();
const angulo = new Angulo();

const d = document;


d.addEventListener(("click"),(e) =>{
    if (e.target.matches("#FactorizarPrimo")) {
        const factorizacion = new Factorizacion();
        let $numeroAFactorizar = d.querySelector("#NumeroAFactorizar");
        if ($numeroAFactorizar.value === "") {
            $numeroAFactorizar.style.border = "solid #ff0000 2px";
            return false;
        }
        $numeroAFactorizar.style.border = "";
        let $mostrarResultado = d.querySelector(".ResultadoDeLaFactorizacion");        
        const numerosPrimosDelNumero = factorizacion.factorizacionPrima($numeroAFactorizar.value);
        $mostrarResultado.innerHTML = `Los números primos de ${$numeroAFactorizar.value} son:`  + mostrarNumerosPrimos(numerosPrimosDelNumero);    
        $mostrarResultado.style.display = "block";
        $numeroAFactorizar.value = "";
        }

    if (e.target.matches("#MCM")) {
        const fracciones = new Fracciones();    
        let $numerosAObtenerMCM = d.querySelector("#NumerosAObtenerMCM");
        if (!$numerosAObtenerMCM.value.includes("-")){
            $numerosAObtenerMCM.style.border = "solid #ff0000 2px";
            $numerosAObtenerMCM.value = "";
            return false;
        };
        let resultado = fracciones.mcm($numerosAObtenerMCM.value);
        let total = 1;
        resultado.forEach((element)=>{
            let newElement = element.split("^");
            total = total * (parseInt(newElement[0])**parseInt(newElement[1]));            
        });
        let $mostrarResultado = d.querySelector(".ResultadoMCM");
        $mostrarResultado.innerHTML = " Números primos de "+ $numerosAObtenerMCM.value +" son "+resultado+" MCM: "+total ;
        $numerosAObtenerMCM.value = "";
    }    
    if (e.target.matches("#Calcular")) {
        const calculadora = new Calculadora();    
        let $numerosACalcular = d.querySelector("#NumerosACalcular");
        let resultado = "";
        if (!$numerosACalcular.value === ""){
            $numerosACalcular.style.border = "solid #ff0000 2px";
            $numerosACalcular.value = "";
            return false;
        };
        var expresionRegular = /[\^+\-x/]/;
        let numeros = $numerosACalcular.value.split(expresionRegular);
        if (numeros.length !=2) {
            console.log("Fuera");
            return false;
        }

        if ($numerosACalcular.value.includes("^")) {
            resultado = "El resultado de la potencia es "+ calculadora.potencia(numeros[0],numeros[1]);
        }if ($numerosACalcular.value.includes("x")) {
            resultado = "El resultado de la multiplación es "+ calculadora.multiplicacion(numeros[0],numeros[1]);
            
        } if ($numerosACalcular.value.includes("-")) {
            resultado = "El resultado de la resta es "+ calculadora.restar(numeros[0],numeros[1]);            
        } if ($numerosACalcular.value.includes("+")) {
            resultado = "El resultado de la suma es "+ calculadora.suma(numeros[0],numeros[1]);            
            
        } if ($numerosACalcular.value.includes("/")) {
            resultado = "El resultado de la división es "+ calculadora.division(numeros[0],numeros[1]);            
            
        }
        let $mostrarResultado = d.querySelector(".ResultadoCalculado");
        $mostrarResultado.innerHTML = resultado ;
        $numerosACalcular.value = "";
    }    
});

function mostrarNumerosPrimos(numerosPrimos) {
    let texto = "";
    Object.entries(numerosPrimos).forEach(numeroPrimo => {
        texto = texto + ` ${numeroPrimo[0]}^${numeroPrimo[1]}`;
    });
    return texto;
}

