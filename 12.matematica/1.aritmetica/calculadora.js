export class Calculadora {
   constructor() {
   }

   potencia(base,exponente){
    return base ** exponente;
   }

   suma(sumando1,sumando2){
        return sumando1 + sumando2;    
   }
   restar(resta1,resta2){
        return resta1 - resta2;    
   }
   multiplicacion(multiplicar1,multiplicar2){
        return multiplicar1 * multiplicar2;    
   }
   division(divisor,dividendo){
        return divisor / dividendo;    
   }

}