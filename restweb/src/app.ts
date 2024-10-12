import { envs } from "./plugins/envs";
import { Server } from "./presentation/server";


(async()=>{
    main();
})();

function main(){
    console.log('hika');
    const server = new Server({
        PORT: envs.PORT,
        PUBLIC_PATH: envs.PUBLIC_PATH
    });
    server.start();
}