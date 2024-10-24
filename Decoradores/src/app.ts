import { Data, Usuario } from "./Usuarios.model";
import * as dotenv from 'dotenv';
dotenv.config();

interface RespuestaHttpOptions {
    path:string;
    method:MethodCRUD;
} 
enum MethodCRUD {
    GET="GET",
    POST="POST",
    PUT="PUT",
    DELETE="DELETE",
} 

function RespuestaHttp(props:RespuestaHttpOptions) {
    let {method,path} = props;

    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {

        const originalMethod = descriptor.value;

        descriptor.value = async( ) => {
            const data:Data = await fetch(`${process.env.URL}${path}`,{method:method}).then(resp => resp.json());
            // console.log(data.data);
            
            return originalMethod(data.data);
        }
    }
}

export class Persona {    
    
    @RespuestaHttp({path:"users",method:MethodCRUD.GET})
    async obtenerUsuarios(usuarios?:Usuario[]):Promise<(Usuario[] | undefined)> {
        return usuarios;
    }
    
}
(async()=>{
    const persona = new Persona();

    const usuarios:Usuario[] = await persona.obtenerUsuarios() || [];
    console.log(usuarios);
})();


    


