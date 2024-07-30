// Identificar numeros primos de una lista
// Identificar numeros primos de una número


function numerosPrimos(numero) {
   let numerosPrimosEncontrados = [];

   for (let index = 2; index < numero; index++) {
      if (!(index%2 === 0 || index%3 === 0 || index%5 === 0 || index%7 === 0) || 
            index === 2 || index === 3 || index === 5 || index === 7) {            
         numerosPrimosEncontrados.push(index);
         }
         
   }
   console.log(numerosPrimosEncontrados);
    return numerosPrimosEncontrados;
}


// numerosPrimos(100);




