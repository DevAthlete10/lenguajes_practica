import { envs } from "./plugins/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";


(async()=>{
    main();
})();

function main(){
    console.log('hika');
    const server = new Server({
        PORT: envs.PORT,
        ROUTES:AppRoutes.router,
        PUBLIC_PATH: envs.PUBLIC_PATH
    });
    server.start();
}