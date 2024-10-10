

export enum LogSeverityLevel{
    low = "low",
    medium = "medium",
    high = "high",
}

export interface LogEntityOptions{
     level:LogSeverityLevel;
     message:string;
     createdAt?:Date;
     origin:string;

}
export class LogEntity {
    public level:LogSeverityLevel;
    public message:string;
    public origin:string;
    public createdAt:Date;
    constructor(options:LogEntityOptions) {
        const {level,message,createdAt=new Date(),origin} = options;
        this.level = level;
        this.message = message;
        this.createdAt = createdAt;
        this.origin = origin;
    }
    static fromJson = (json:string):LogEntity =>{
        const {message,level,createdAt,origin} = JSON.parse(json);
        const log = new LogEntity({
            message:message,
            level:level,
            createdAt:createdAt,
            origin:origin    
        });
        return log;
    }
}

