export default class NumerosPrimos {
    #limite;
   constructor() {
    this.#limite = 1000;
   }

   numerosPrimos(){
    let primos = [];
    for (let index = 2; index < this.#limite; index++) {
        if (this.#esPrimo(index)) primos.push(index);        
    }
    return primos;
   }   

    #esPrimo(numero){
        for (let index = 2; index < numero; index++) {
            if (numero % index === 0) return false; 
        }
        return numero !== 1;
    }

}