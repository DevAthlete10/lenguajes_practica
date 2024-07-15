class Originador {
   constructor() {
   }
   crearMemento(nombre){
    return new Memento(nombre);
   }
   establecerMemento(memento){
    memento.obtenerEstado();
   }
}


class Memento {
   constructor(nombre) {
    this.nombre = nombre;
   }
   obtenerEstado(){}
   establecerEstado(){}
   
}

class Conserje {
    mementos = [];
   constructor() {    
    this.index = 1;
   }

   addMemento(memento){
    this.mementos.push(memento);  
    this.index++;  
   }

   getMementos(){
    return this.mementos;
   }

   retroceder(){
    let memento;    
    this.index--;
        if (this.index > 0) {
            memento = this.mementos[this.index-1];            
        }
        return memento;
   }

   adelantar(){
    let memento;    
    this.index++;
        if (this.index <= this.mementos.length) {
            memento = this.mementos[this.index-1];            
        }
        return memento;
   }

}


const originador = new  Originador();
let cristobal = originador.crearMemento("Cristobal");
let nicolas = originador.crearMemento("Nicolas");
let miguel = originador.crearMemento("Miguel");
let mauricio = originador.crearMemento("Mauricio");
let benjamin = originador.crearMemento("Benjamin");
const conserjer = new Conserje();
conserjer.addMemento(cristobal);
conserjer.addMemento(nicolas);
conserjer.addMemento(miguel);
conserjer.addMemento(mauricio);
conserjer.addMemento(benjamin);
console.log(conserjer.getMementos());
console.log(conserjer.retroceder());
console.log(conserjer.retroceder());
console.log(conserjer.retroceder());
console.log(conserjer.adelantar());
console.log(conserjer.adelantar());
console.log(conserjer.retroceder());


