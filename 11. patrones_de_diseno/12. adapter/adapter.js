class Objecto {
    constructor() {
      if (new.target === Objecto) {
        throw new Error('La clase abstracta Objecto no se puede instanciar');
      }
    }
 
    peticion() {
        throw new Error('El método peticion no se puede llamar');
    }
 
 }
 
 
 class Adaptable {
    constructor() {
    }
    peticion(){
     console.log("Adaptable");
    }
 }
 
 class AdaptadorAgregando extends Objecto {
    constructor() {
     super();
     this.adaptados = [];
    }
 
    addAdaptado(adaptado){
     this.adaptado = adaptado;
     this.adaptados.push(adaptado);
    }
 
    peticion(){
     console.log("Adaptador agredado adaptando  ");
     this.adaptado.peticion();
    }
 }
 
 class AdaptadorAsociado extends Objecto {
    constructor(adaptado) {
      super();
      this.adaptado = adaptado;
    }
 
    peticion(){
     console.log("Adaptador asociado adaptando ");
     this.adaptado.peticion();
    }
 }

 class AdaptadorUso extends Objecto {
    constructor() {
      super();
    }
 
    peticion(){
     this.adaptado = new Adaptable();
     console.log("Adaptador Uso adaptando ");
     this.adaptado.peticion();
    }
 }

 class AdaptadorComposicion extends Objecto {
    constructor() {
      super();
      this.adaptado = new Adaptable();
    }
 
    peticion(){

     console.log("Adaptador Composicion adaptando ");
     this.adaptado.peticion();
    }
 }
 
 const adaptado = new Adaptable();
 
 const adaptadorComposicion = new AdaptadorComposicion(adaptado);
 const adaptadorAgregando = new AdaptadorAgregando();

 const adaptadorAsociado = new AdaptadorAsociado(adaptado);
 const adaptadorUso = new AdaptadorUso();
 
 adaptadorComposicion.peticion();
 adaptadorAgregando.addAdaptado(adaptado);
 adaptadorAgregando.peticion();

 adaptadorAsociado.peticion();
 adaptadorUso.peticion();