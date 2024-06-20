const dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

let diaSeleccionado = "Marvtes";

switch (diaSeleccionado) {
    case dias[0]:
        console.log(`dia seleccionado ${dias[0]}`);        
        break;
    case dias[1]:        
        console.log(`dia seleccionado ${dias[1]}`);
        break;
    case dias[2]:        
        console.log(`dia seleccionado ${dias[2]}`);
        break;
    case dias[3]:        
        console.log(`dia seleccionado ${dias[3]}`);
        break;
    case dias[4]:        
        console.log(`dia seleccionado ${dias[4]}`);
        break;
    case dias[5]:
        console.log(`dia seleccionado ${dias[5]}`);
        break;
    case dias[6]:
        console.log(`dia seleccionado ${dias[6]}`);
        break;
        
        default:            
            console.log(`dia seleccionado no existe`);
        break;
}
