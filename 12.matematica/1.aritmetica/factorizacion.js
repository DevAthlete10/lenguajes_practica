import NumerosPrimos from "./numerosPrimos.js";

export default class Factorizacion {
   constructor() {
   }

   factorizacionPrima(numero) {
        const numerosPrimos = new NumerosPrimos();
        const PRIMOS = numerosPrimos.numerosPrimos(); 
        let EncontradoTodosLosNumerosPrimos = false;
        let numerosPrimosDelNumero = []; 
        let MementoDelNumero = [];
        let index = 0;
        MementoDelNumero.push(numero);
        do {
            let resultadoDeLaDivision = MementoDelNumero[MementoDelNumero.length-1] / PRIMOS[index];        
            if (Number.isInteger(resultadoDeLaDivision)) {
                numerosPrimosDelNumero.push(PRIMOS[index]);
                MementoDelNumero.push(resultadoDeLaDivision);
                if (resultadoDeLaDivision === 1) EncontradoTodosLosNumerosPrimos = true;            
            }else{
                index++;
            }     
        } while (!EncontradoTodosLosNumerosPrimos);
        return this.#presentacionDeLaFactorizacion(numerosPrimosDelNumero);
   }

   #presentacionDeLaFactorizacion(numerosPrimos){
        let organizacionDeNumeros = {}; 
        numerosPrimos.forEach(numeroPrimo => {
            organizacionDeNumeros[numeroPrimo] = (organizacionDeNumeros[numeroPrimo] || 0) + 1;
        });
        return organizacionDeNumeros;
   }
}
