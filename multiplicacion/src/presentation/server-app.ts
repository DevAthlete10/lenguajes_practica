import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base:number;
    limit:number;
    showTable:boolean;
    fileName:string;
    fileDestination:string;
}

export class ServerApp {
    constructor() {
        
    }

    static run({base,limit,showTable,fileDestination,fileName}:RunOptions){
        const table = new CreateTable().execute({base,limit});
        const wasCreated = new SaveFile().execute({fileContent:table,fileName:`${fileName}-${base}`,fileDestination:fileDestination});
        if (showTable) {
            console.log(table);
        }
    }
}