class MuroBasico{
    constructor() {
        if (new.target === MuroBasico) {
            throw new TypeError("Error ");
        }
    }
    pintar(){
        throw new Error("Error ");
    }        
}

class MuroDeYeso extends MuroBasico {
    pintar(){
        console.log("Solo Pintar Muro");        
    }
}

class AplicarMetodologiaConstructiva extends MuroBasico{
    constructor(muroBasico) {
        super();
        this.muroBasico = muroBasico;
    }
    pintar(){ 
        this.muroBasico.pintar();        
    }
}

class AplicandoMetodoDrywall extends AplicarMetodologiaConstructiva {

    constructor(muroBasico) {
        super(muroBasico);
    }

    pintar(){
        console.log("Aplicar metodología Drywall");
        this.#estucar();
        this.#lijar();
        super.pintar();       
    }
    #estucar(){
        console.log("1. Estucar Muro");
    } 
    #lijar(){
        console.log("2. Lijar Muro");
    }
}

const muroDeYeso = new MuroDeYeso();
const aplicandoMetodoDrywall = new AplicandoMetodoDrywall(muroDeYeso);


muroDeYeso.pintar();

aplicandoMetodoDrywall.pintar();

