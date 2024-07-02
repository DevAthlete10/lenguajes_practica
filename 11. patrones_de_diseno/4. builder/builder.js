class Rup {
    constructor() {
        if (new.target === Rup) {
            throw new TypeError("No se puede instanciar esta clase");
        }
    }

    modeloDelDominio(){
        throw new Error("NO se puede ejecutar este método");
    }

    requisitos(){
        throw new Error("NO se puede ejecutar este método");
    }

    analisis(){
        throw new Error("NO se puede ejecutar este método");
    }

    diseño(){
        throw new Error("NO se puede ejecutar este método");
    }

    implementacion(){
        throw new Error("NO se puede ejecutar este método");
    }

    testeo(){
        throw new Error("NO se puede ejecutar este método");
    }
}

class Etapas {
}

class ModeloDelDominioBlog extends Etapas {
}
class RequisitosBlog extends Etapas {
}
class AnalisisBlog extends Etapas {
}
class DiseñoBlog extends Etapas {
}
class ImplementacionBlog extends Etapas {
}
class TesteoBlog extends Etapas {
}

class RupBlog extends Rup {
    modeloDelDominio(){
        console.log("Construir modelo");
        return new ModeloDelDominioBlog();
    }

    requisitos(){
        console.log("Construir requisito");
        return new RequisitosBlog();
    }
    
    analisis(){
        console.log("Construir analisis");
        return new AnalisisBlog();
    }
    
    diseño(){
        console.log("Construir diseño");
        return new DiseñoBlog();
    }
    
    implementacion(){
        console.log("Construir implementación");
        return new ImplementacionBlog();        
    }

    testeo(){
        console.log("Construir testeo");
        return new TesteoBlog();
    }

    construir(){
        
        this.modeloDelDominio();
        
        this.requisitos();
        
        this.analisis();
        
        this.diseño();
        
        this.implementacion();
        
        this.testeo();
    }    
}

const crearBlogRUP = new RupBlog();
console.log("Crear Blog con la metodología RUP");
crearBlogRUP.modeloDelDominio();
crearBlogRUP.requisitos();
crearBlogRUP.analisis();
crearBlogRUP.diseño();
crearBlogRUP.implementacion();
crearBlogRUP.testeo();

crearBlogRUP.construir();

