class Forma {
    constructor() {
        if (new.target === Forma) {
            throw new TypeError("Error de Clase");
        }
    }
    cajaLimitrofe(){
        throw new Error("Error de método");
    }
    crearManipulador(){
        throw new Error("Error de método");
    }
}

class Linea extends Forma {
    cajaLimitrofe(){
    }
    crearManipulador(){
    }
}

class FormaTexto extends Forma {
    constructor() {
        this.vistaTexto = new VistaTexto();
    }
    cajaLimitrofe(){
        this.vistaTexto.obtenerExtension();
    }
    crearManipulador(){
        return new ManipuladorDeTexto();
    }
}


class VistaTexto {
    obtenerExtension(){}
}
class ManipuladorDeTexto { 
}

// 

