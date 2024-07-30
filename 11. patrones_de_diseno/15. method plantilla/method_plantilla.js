
class Notas {
   constructor() {
    this.titulo();
    this.subtitulo();
    this.descripcion();
   }

  titulo(){
    throw Error("No se puede iniciar este método");
  }
  
  subtitulo(){
    console.log("Sub Titulo");
  }
  
  descripcion(){
    throw Error("No se puede iniciar este método");
  }


}

class NotasEntrenamiento extends Notas {
   constructor() {
    super();
   }

   titulo(){
    console.log("Titulo para una nota de entrenamiento");
   }

   descripcion(){
    console.log("Creo una descripcion para una nota de entrenamiento");
   }

}


const notaEntrenamiento = new NotasEntrenamiento();
