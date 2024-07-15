/*

Arquitecto de software competente entrega ordenes según
la clasificación del desarrollador en ese momento:

- Junior 
- Semi senior
- Senior

*/

class Tarea {
   constructor() {
     if (new.target === Tarea) {
       throw new Error('La clase abstracta Tarea no se puede instanciar');
     }
   }

   completar() {
       throw new Error('El método completar no se puede llamar');
   }
}

class Junior {
   constructor() {
   }
   programarLoBasico(){
       console.log("Soy Junior y Programo");
   }
}

class SemiSenior {
   constructor() {
   }
   programarLoIntermedio() {
       console.log("Soy SemiSenior y Programo");
   }
}

class Senior {
   constructor() {
   }
   programarLoAvanzado() {
    console.log("Soy senior y Programo");
   }
}

class JuniorTarea extends Tarea {
   constructor(junior) {
    super();
    this.junior = junior;
   }

   getJunior(){
    return this.junior;
   }
}

class SemiSeniorTarea extends Tarea {
   constructor(semiSenior) {
    super();
    this.semiSenior = semiSenior;
}

   getSemiSenior(){
    return this.semiSenior;
   }
}

class SeniorTarea extends Tarea {
   constructor(senior) {
    super();
    this.senior = senior;
   }

   getSenior(){
    return this.senior;
   }
}

class ModificandoBoton extends JuniorTarea {
   constructor(junior) {
    super(junior);
   }
   completar(){
    console.log("Modificar Botón");
    this.getJunior().programarLoBasico();
   }
}
class ModificandoBuscador extends JuniorTarea {
   constructor(junior) {
    super(junior);
   }
   completar(){
    console.log("Modificar Buscador");
    this.getJunior().programarLoBasico();
   }
}


class TomandoRequisitos extends SemiSeniorTarea {
    constructor(semiSenior) {
     super(semiSenior);
    }
    completar(){
     console.log("Tomando Requisitos ");
     this.getSemiSenior().programarLoIntermedio();
    }
}

class TomandoCasosDeUso extends SemiSeniorTarea {
    constructor(semiSenior) {
     super(semiSenior);
    }
    completar(){
     console.log("Tomando Casos De Uso");
     this.getSemiSenior().programarLoIntermedio();
    }
}

class CreandoArquitectura extends SeniorTarea {
    constructor(senior) {
     super(senior);
    }
    completar(){
     console.log("Creando Arquitectura");
     this.getSenior().programarLoAvanzado();
    }
}

 class Gestor {
    constructor() {
    }
    solicitar(tarea){
        tarea.completar();
    }
 }


class Escenario {
   constructor() {
    this.gestor = new Gestor();
    this.senior = new Senior();
    this.semiSenior = new SemiSenior();
    this.junior = new Junior();
   }

   crearSoftware() {
    this.gestor.solicitar(new TomandoRequisitos(this.semiSenior) );
    this.gestor.solicitar(new TomandoCasosDeUso(this.semiSenior) );
    this.gestor.solicitar(new CreandoArquitectura(this.senior) );
    this.gestor.solicitar(new ModificandoBoton(this.junior) );
    this.gestor.solicitar(new ModificandoBuscador(this.junior) );
   }

}


contexto = new Escenario();

contexto.crearSoftware();