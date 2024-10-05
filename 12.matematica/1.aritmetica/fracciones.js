import Factorizacion from "./factorizacion.js";

export default class Fracciones {
   constructor() {
   }

   mcm(numeros){
        let resultados = [];
        const numerosEnLista = numeros.split("-");
        const factorizacion = new Factorizacion();
        numerosEnLista.forEach(numero => {
            if (numero != 1) {
                const result = factorizacion.factorizacionPrima(numero);            
                resultados.push(Object.entries(result));                
            }
        });
        let elementos = [];
        const result = resultados.reduce(function(acumulador, valorActual) {            
            return acumulador.concat(valorActual);
        }, []);  
        result.sort();
        if (parseInt(result[result.length-1][0]) < parseInt(result[0][0])) {
            result.reverse();
        }
        result.forEach(element => {
            let temp = `${element[0]}^${element[1]}`;
            elementos.push(temp);
        });
        let newList = new Set(elementos);
        let array = [...newList];
        let prueba = [];
        let ultimoElementoAgregado = 0;
        array.sort();
        for (let index = 0; index < array.length; index++) {
            let elementActual = array[index].split("^");
            if (index+1 < array.length && ultimoElementoAgregado != 0 && !prueba.includes(array[index])) {
                let elementNext = array[index].split("^");
                if (ultimoElementoAgregado[0] === elementNext[0]) {
                    if (ultimoElementoAgregado[1] < elementNext[1]) {
                        prueba[prueba.length-1] = `${elementNext[0]}^${elementNext[1]}`;
                    } 
                }else{
                    prueba.push(`${elementActual[0]}^${elementActual[1]}`);
                }   
            }else{                    
                prueba.push(`${elementActual[0]}^${elementActual[1]}`);                                           
            }
            ultimoElementoAgregado = prueba[prueba.length-1].split("^");            
        }
        return prueba;
    }

}