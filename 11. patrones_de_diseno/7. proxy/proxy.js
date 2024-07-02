class Alumno {
    dudas(){
        console.log("Dudas del alumno");
    }
    mejoras(){
        console.log("Mejoras del alumno");
    }
    enojos(){
        console.log("Mejoras del enojos");
    }    
}


class Apoderado extends Alumno{

    dudas(){
        console.log("Dudas del Apoderado");
        super.dudas();
    }
    mejoras(){
        console.log("Mejoras del apoderado");
        super.mejoras();
    }
    enojos(){
        console.log("Enojos del apoderado");
        super.enojos();
    }
}

const apoderado = new Apoderado();
apoderado.dudas();
apoderado.mejoras();
apoderado.enojos();