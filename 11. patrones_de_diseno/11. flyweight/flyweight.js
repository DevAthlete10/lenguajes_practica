class A {

   constructor() {
   }
   name(){
    return "A";
   }  
}


class B {
    a;
   constructor() {

   }

   set(a){
    this.a = a;
    this.c = new C(a);
   }

   get(){
    return this.c;
   }

}

class C {
   constructor(ab) {
    this.ab = ab;
   }
   mostrar(){
        console.log(this.ab.name());
   }
}

const a = new A();
const b = new B();
b.set(a);
// no se aplica la ley de demeter
b.get().mostrar();