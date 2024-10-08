import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const {b:base,l:limit,s:show} = yarg;
const outputMessage:string = "Hola";
let headerMessage:string = `
===========================
    Tabla del ${base}
===========================
`;

for (let index = 1; index < limit; index++) {    
    headerMessage += `${index} x ${base} = ${index * base}\n`;
}

if (show) {
    
    console.log(headerMessage);
}

const outputPath = `outputs`;
fs.mkdirSync(outputPath,{recursive: true});

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,headerMessage);


