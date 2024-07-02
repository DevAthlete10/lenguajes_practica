
class Ventana {

    setVentanaImpl(ventanaImpl){
        this.ventanaImpl = ventanaImpl;
    }
    dibujarTexto(){
        console.log("Ventana Dibujar texto");
        this.ventanaImpl.dispositivoDibujarTexto();
    }
    dibujarRect(){
        console.log("Ventana Dibujar rect");
        this.ventanaImpl.dispositivoDibujarLinea();
    }

}

class VentanaIcono extends Ventana {
    constructor() {
        console.log("VentanaIcono");
        super();
    }
    dibujarBorde(){
        super.dibujarRect();
        super.dibujarTexto();
    }
}
class VentanaFlotante extends Ventana {
    constructor() {
        console.log("VentanaFlotante");
        super();
    }
    dibujarCajaCerrada(){
        super.dibujarRect();        
    }
}
class VentanaImpl {
    dispositivoDibujarTexto(){
        console.log("dispositivoDibujarTexto");
    }
    dispositivoDibujarLinea(){
        console.log("dispositivoDibujarLinea");
    }
}


class VentanaImplX extends VentanaImpl {
    dispositivoDibujarTexto(){
        console.log("VentanaImplX texto");
    }
    dispositivoDibujarLinea(){
        console.log("VentanaImplX linea");
    }
}

class VentanaImplPM extends VentanaImpl {
    dispositivoDibujarTexto(){
        console.log("VentanaImplPM texto");
    }
    dispositivoDibujarLinea(){
        console.log("VentanaImplPM linea");
    }
}

const ventana = new VentanaIcono();
const ventanaImpl = new VentanaImplPM();

ventana.setVentanaImpl(ventanaImpl);
ventana.dibujarRect();
ventana.dibujarTexto();
