
class Motos{
    
    constructor() {
        if (new.target === Motos) {
            throw new TypeError("No puedes instanciar la clase abstracta 'Vehiculo' directamente");
        }
    }    
    
    seleccionarModelo(){
        throw new Error("Método 'seleccionarModelo()' debe ser implementado en la clase hija");
    };  

}
 
class MotosNakeHonda160 extends Motos{
    
    constructor() {
        super();
    }

    seleccionarModelo(){
        return new Xblade160();
    }
}

class MotosNakeHonda190 extends Motos{
    
    constructor() {
        super();
    }

    seleccionarModelo(){
        return new Cb190();
    }
}



class ModelosNake {
    constructor() {
        if (new.target === ModelosNake) {
            throw new TypeError("No puedes instanciar la clase abstracta 'Modelos' directamente");
        }
    }

    name(){
        throw new Error("Método 'name()' debe ser implementado en la clase hija");
    }

}

class Xblade160 extends ModelosNake {
    constructor() {
        super();
    }    
    name(){
        "Xblade 160"
    }
}

class Cb190 extends ModelosNake {
    constructor() {
        super();
    }    
    name(){
        "CB 190"
    }
}

const moto = new Motos();
const modelo160 = new MotosNakeHonda160(); 
const modelo190 = new MotosNakeHonda190(); 

console.log(moto);
console.log(modelo160.seleccionarModelo());
console.log(modelo190.seleccionarModelo());

