class Persona {
    nombre;
    codigo;
    #edad = 26;
    gato = "bicho";
    constructor(nombre,codigo){
        this.nombre = nombre;
        this.codigo = codigo;
        console.log("Soy el constructor");
    }
    
    get getGato() {
        return this.gato;
    }
    /**
     * @param {string} gato
     */
    set setGato(gato) {
        this.gato = gato;
    }
    funcion(params) {
        this.#edad;
     this.#funcion_privada();   
    }
    #funcion_privada(params) {
        
    }



}



const cristobal = new Persona("cristobal","javascript");
console.log(cristobal);
console.log(cristobal.getGato);
cristobal.setGato = "bruno"
console.log(cristobal.getGato);


class Mujer extends Persona {
    constructor(nombre,codigo){
        super(nombre,codigo);    
    }
}

mama = new Mujer("Margarita","Javascript");

console.log(mama);