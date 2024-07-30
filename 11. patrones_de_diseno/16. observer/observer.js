class Observado {
   observadores = [];
   constructor() {
     if (new.target === Observado) {
       throw new Error('La clase abstracta Observado no se puede instanciar');
     }
   }

   addObservador(observador){
    if (!this.observadores.includes(observador)) {
      this.observadores.push(observador);
    }
   }

   notificar(event){
        this.observadores.forEach(observador => {
            observador.actualizar(event);
        });
   }

}

class Observador {
   constructor() {
     if (new.target === Observador) {
       throw new Error('La clase abstracta Observador no se puede instanciar');
     }
   }

   actualizar(event){   
    throw Error("No se puede ejecutar el método");     
   }

}

class Event {
   constructor() {
   }

}

class ComerEvent extends Event {
   constructor() {
    super();
  }
  
}

class DormirEvent extends Event {
   constructor() {
     super();
    }
    
  }
  
  class AcariciarEvent extends Event {
   constructor() {
     super();
   }

}

class Bruno extends Observado {
   constructor() {
    super();
   }

   comer(){
     console.log("BRUNO PIDE COMER");
     this.notificar(new ComerEvent());
    }   

    acariciar(){
     console.log("BRUNO PIDE ACARICIAR");
     this.notificar(new AcariciarEvent());
    }   

    dormir(){
     console.log("BRUNO PIDE DORMIR");
     this.notificar(new DormirEvent());
    }   
    
  }
  
  class Bicho extends Observado {
    constructor() {
      super();
    }
    
    comer(){
      console.log("BICHO PIDE COMER");
      this.notificar(new ComerEvent());
     }   
 
     acariciar(){
      console.log("BICHO PIDE ACARICIAR");
      this.notificar(new AcariciarEvent());
     }   
 
     dormir(){
      console.log("BICHO PIDE DORMIR");
      this.notificar(new DormirEvent());
     }    

}
class Peluca extends Observado {
   constructor() {
    super();
   }

   comer(){
    console.log("PELUCA PIDE COMER");
    this.notificar(new ComerEvent());
   }   

   acariciar(){
    console.log("PELUCA PIDE ACARICIAR");
    this.notificar(new AcariciarEvent());
   }   

   dormir(){
    console.log("PELUCA PIDE DORMIR");
    this.notificar(new DormirEvent());
   }    

}

class Mama extends Observador {
   constructor() {
    super();
   }

   actualizar(event){
    if (event instanceof ComerEvent) {
        console.log("le dio de comer mama");
    }
    if (event instanceof AcariciarEvent) {
        console.log("le dio acaricias mama");        
    }
    if (event instanceof DormirEvent) {
        console.log("duerme mama");                
    }
   }

}

class Cristobal extends Observador {
   constructor() {
    super();
   }
   actualizar(event){
    if (event instanceof ComerEvent) {
        console.log("le dio de comer cristobal");
    }
   }
}

class Nicolas extends Observador {
   constructor() {
    super();
   }

   actualizar(event){
    if (event instanceof ComerEvent) {
        console.log("le dio de comer nicolas");
    }
    if (event instanceof AcariciarEvent) {
        console.log("le dio acaricias nicolas");        
    }
    if (event instanceof DormirEvent) {
        console.log("duerme nicolas");                
    }
   }

}

const bruno = new Bruno();
const bicho = new Bicho();
const peluca = new Peluca();

const cristobal = new Cristobal();
const nicolas = new Nicolas();
const mama = new Mama();

bruno.addObservador(mama);
bruno.addObservador(nicolas);
bruno.addObservador(cristobal);

bicho.addObservador(mama);
bicho.addObservador(nicolas);
bicho.addObservador(cristobal);

peluca.addObservador(mama);
peluca.addObservador(nicolas);

console.log("-------- BICHO --------");
bicho.comer();
bicho.acariciar();
bicho.dormir();
console.log("-------- BICHO --------");
console.log("-------- BRUNO --------");

bruno.comer();
bruno.acariciar();
bruno.dormir();
console.log("-------- BRUNO --------");
console.log("-------- PELUCA --------");

peluca.comer();
peluca.acariciar();
peluca.dormir();
console.log("-------- PELUCA --------");
