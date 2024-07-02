class Clonar {
    constructor() {
        if (new.target === Clonar) {
            throw new TypeError("Error de la clase");
        }
    }
    clonar(){
        throw new Error("NO puede utilizar este método");
    }
}

class Auto extends Clonar{
    constructor(chasis, motor) {
        super();
        this.chasis = chasis;
        this.motor = motor;
    }

    clonar(){
        return this;
    }
}


const autoOriginal = new Auto(chasis=11111,motor=22222); 
const autoClonado = autoOriginal.clonar();

console.log("Auto original",autoOriginal.chasis,autoOriginal.motor);
console.log("Auto Clonado",autoClonado.chasis,autoClonado.motor);