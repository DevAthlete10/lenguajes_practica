import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImpl implements LogRepository {
    // private logDatasource
    constructor(
        private readonly logDatasource:LogDatasource
    ) {}
    saveLog(newLog: LogEntity): Promise<void> {
       return this.logDatasource.saveLog(newLog);
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDatasource.getLogs(severityLevel);
    }
}