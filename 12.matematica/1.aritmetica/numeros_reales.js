export default class NumerosReales {
   #compuesto = ["Números naturales","Elemento neutro", "Números negativos"];
   constructor() {
   }

   esUnNumeroReal(numero) {
    let result = "";
    switch (Math.sign(numero)) {
        case 1:
            result = `Es parte de los números reales, en específico de los ${this.#compuesto[0]}`;            
            break;            
        case 0:
            result = `Es parte de los números reales, en específico es un ${this.#compuesto[1]}`;            
            break;
        case -1:
            result = `Es parte de los números reales, en específico de los ${this.#compuesto[2]}`;            
            break;            
        default:
        result = "NO es un número real";
        break;
    }
    return result;
   }

}



