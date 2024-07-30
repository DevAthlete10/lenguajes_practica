

class Album {
    fotografias = [];
    seleccionarFotografia;
    index = 0;
    constructor(fotografia) {
     this.fotografia = fotografia;
    }
 
    registrar(){
 
       this.fotografias.push(this.fotografia.crearFotografiaVersion());
       this.index++;
 
    }
 
    retroceder(){
       if (this.index > 0) {
         this.index--;
         this.seleccionarFotografia =  this.fotografias[this.index];
       }
       
       console.log(`Retroceder ${this.index}`);
     }
     
     adelantar(){
       if (this.index < this.fotografias.length) {
         this.index++;
         this.seleccionarFotografia =  this.fotografias[this.index];
       }
       console.log(`Adelantar ${this.index}`);
    }
 
    getFotografias(){
     return this.fotografias;
    }
 
    getFotografia(){
     return this.seleccionarFotografia;
    }
 
 }
 
 class Fotografia {
   constructor(name) {
    this.name = name;
   }
 
   getNombre(){
    return this.name;
   }
   setNombre(name){
    this.name = name;
   }
 
   crearFotografiaVersion(){
     return new FotografiaVersion(this.name);
   }
 
 }
 
 class FotografiaVersion {
    constructor(name) {
     this.name = name;
    }
 
 }
 
 const fotografia = new Fotografia("Cristobal");
 const albumFotografias = new Album(fotografia);
 albumFotografias.registrar();
 fotografia.setNombre("Nicolas");
 albumFotografias.registrar();
 fotografia.setNombre("Mauricio");
 albumFotografias.registrar();
 fotografia.setNombre("Benjamin");
 albumFotografias.registrar();
 
 albumFotografias.retroceder();
 albumFotografias.retroceder();
 albumFotografias.retroceder();
 albumFotografias.retroceder();
 albumFotografias.adelantar();
 albumFotografias.adelantar();
 console.log(albumFotografias.getFotografia());
 console.log(albumFotografias.getFotografias());


