import { PrismaClient } from "@prisma/client";
import { MongoDatabase } from "./data/mongo/init";
import { LogModel } from "./data/mongo/models/log.model";
import { envs } from "./plugins/envs.plugin";
import { Server } from "./presentation/server"

(async()=>{
     main();
})();

async function main() {
    await MongoDatabase.connect({
        mongoUrl:envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    });

    // const newLog = await LogModel.create({
    //     message:'Test message desde Mongo',
    //     level:'low',
    //     origin:'App.ts'
    // });

    Server.start();
}