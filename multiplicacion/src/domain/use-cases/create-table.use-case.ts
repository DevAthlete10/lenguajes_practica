export interface CreateTableUseCase{
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base:number;
    limit?:number;
}

export class CreateTable implements CreateTableUseCase{
    constructor() {
        
    }

    execute({base,limit = 10}: CreateTableOptions){
        let headerMessage = '';
        for (let index = 1; index <= limit; index++) {    
            headerMessage += `${base} x ${index} = ${index * base}${(index > limit-1) ? "":"\n" }`;
        }
        return headerMessage;
    };
}