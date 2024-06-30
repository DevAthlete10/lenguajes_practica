class MesaFactory {

    constructor() {
        if (new.target === MesaFactory) {
            throw new TypeError("No puedes instanciar la clase abstracta 'FabricaDeMesas' directamente");
        }
    }

    crearPatas(){        
        throw new Error("No puedes instanciar el metodo crearPatas()");                    
    }

    crearTablero(){
        throw new Error("No puedes instanciar el metodo crearTablero()");            
    }

}


class PatasFactory{
    constructor(cantidadPata) {
        if (new.target === PatasFactory) {
            throw new TypeError("No puedes instanciar la clase abstracta 'Patas' directamente");
        }
        this.cantidadPata = cantidadPata;
    }
}

class TableroFactory{
    constructor(ancho,largo) {
        if (new.target === TableroFactory) {
            throw new TypeError("No puedes instanciar la clase abstracta 'Tablero' directamente");
        }
        this.ancho = ancho;
        this.largo = largo;
    }   
}

class PatasCocina extends PatasFactory {
    constructor(cantidadPata) {
        super(cantidadPata);
    }
}

class TableroCocina extends TableroFactory {
    constructor(ancho,largo) {
        super(ancho,largo);
    }
}

class CrearMesaCocina extends MesaFactory {
    crearPatas(){
        return new PatasCocina(4);
    };
    crearTablero(){
        return new TableroCocina(2,4);
    }
}

class PatasTerraza extends PatasFactory {
    constructor(cantidadPata) {
        super(cantidadPata);
    }
}

class TableroTerraza extends TableroFactory {
    constructor(ancho,largo) {
        super(ancho,largo);
    }
}

class CrearMesaTerraza extends MesaFactory {
    crearPatas(){
        return new PatasTerraza(1);
    };
    crearTablero(){
        return new TableroTerraza(2,2);
    }
}

const crearMesaCocina = new CrearMesaCocina();
const crearMesaTerraza = new CrearMesaTerraza();

console.log("Crear mesa para cocina");
console.log(crearMesaCocina.crearPatas());
console.log(crearMesaCocina.crearTablero());

console.log("Crear mesa para terraza");
console.log(crearMesaTerraza.crearPatas());
console.log(crearMesaTerraza.crearTablero());
