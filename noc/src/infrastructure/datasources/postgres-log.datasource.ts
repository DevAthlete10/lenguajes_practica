import { PrismaClient, SeverityLevel } from "@prisma/client";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
const prisma = new PrismaClient();

const severityEnum = {
    low:SeverityLevel.LOW,
    medium:SeverityLevel.MEDIUM,
    high:SeverityLevel.HIGH
}
export class PostgresLogDatasource implements LogDatasource {
    
    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await prisma.logModel.create({
            data:{
                ...log,
                level: severityEnum[log.level],
            }
        });
        console.log(newLog);
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const dbLogs = await prisma.logModel.findMany();

        return dbLogs.map(LogEntity.fromObject);
    }
}