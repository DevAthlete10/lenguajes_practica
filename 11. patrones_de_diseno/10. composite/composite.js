
class PartesDeUnComputador {
    constructor() {
        if (new.target === PartesDeUnComputador) {
            throw new TypeError("No se puede instanciar la clase");
        }
    }
    nombre(){
        throw new Error("Error de instanciación del método");
    }
}


class Computador extends PartesDeUnComputador {
    partes = [];
    constructor(nombre_) {
        super();
        this.nombre_ = nombre_;
    }
    addParte(parte){
        this.partes.push(parte);
    }
    getPartes(){
        return this.partes;
    }
    nombre(){
        console.log(this.nombre_);
    }
}

class Parte extends PartesDeUnComputador {
    constructor(nombre_) {
        super();
        this.nombre_ = nombre_;
    }
    nombre(){
        console.log(this.nombre_);
    }
}


const placaMadre = new Parte("Placa Madre");
const ventilador = new Parte("Ventilador");
const tarjetaDeVideo = new Parte("Tarjeta de video");
const procesador = new Parte("Procesador");

const computador = new Computador("Computador Completo");

computador.nombre();
placaMadre.nombre();
ventilador.nombre();
tarjetaDeVideo.nombre();
procesador.nombre();

computador.addParte(placaMadre);
computador.addParte(ventilador);
computador.addParte(tarjetaDeVideo);
computador.addParte(procesador);

console.log(computador.getPartes());


