class SistemaRespiratorio {
}

class SistemaCirculatorio {
}

class SistemaConectivo {
}

class SistemaEndocrino {
}

class CuerpoHumano {

    #sistemaCirculatorio(){
        console.log("Ejecutar sistema circulatorio");
        return new SistemaCirculatorio();
    }
    
    #sistemaConectivo(){
        console.log("Ejecutar sistema conectivo");
        return new SistemaConectivo();
    }
    
    #sistemaEndocrino(){
        console.log("Ejecutar sistema endocrino");
        return new SistemaEndocrino();
    }
    
    #sistemaRespiratorio(){
        console.log("Ejecutar sistema respiratorio");
        return new SistemaRespiratorio();
    }

    ejecutar(){
        console.log("Ejecutar según corresponda cada subsistema");
        this.#sistemaCirculatorio();
        this.#sistemaConectivo();
        this.#sistemaEndocrino();
        this.#sistemaRespiratorio();
    }

}

const cuerpoHumano = new CuerpoHumano();

cuerpoHumano.ejecutar();

