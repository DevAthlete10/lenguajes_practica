const tipoDeSistema = {
    Grado:["Grado","Minuto","Segundo"],
    Radianes:"Radian",
} 

class Angulo {
    #pi = Math.PI;
    constructor() {
   }
   
   convertirGradoARadian(grado){
       let convertir = grado*(this.#pi/180);    
       return convertir;
    }
    convertirARadianAGrado(radian){
         let convertir = radian*(180/this.#pi);
         return convertir;
    }
    
   convertirGradoAMinuto(grado){
        let convertir = grado*60;    
        return convertir;
   }

   convertirGradoASegundo(grado){
        let convertir = grado*3600;    
        return convertir;
   }

   convertirMinutoAGrado(minuto){
        let convertir = minuto/60;    
        return convertir;
   }

   convertirSegundoAGrado(segundo){
        let convertir = segundo/3600;    
        return convertir;
   }

}

export {
    Angulo,
    tipoDeSistema
}
