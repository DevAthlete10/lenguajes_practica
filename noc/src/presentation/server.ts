import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.respository.impl";
import { CronService } from "../plugins/cron.plugin";
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { EmailService } from "../plugins/email.plugin";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { MongoLogDatasourse } from "../infrastructure/datasources/mongo-log.datasourse";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";


const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()    
);
const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasourse()
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource()
);

export class Server {

    public static  start(){
        console.log("Server started...");
        const emailService = new EmailService();

        // new SendEmailLogs(
        //     emailService,
        //     logRepository
        // ).execute([
        //     "crisss123xd@gmail.com",
        //     "nicolass953@gmail.com",
        // ]);
        // emailService.sendEmail({
        //     to:'crisss123xd@gmail.com',
        //     // to:'cristobal.trabajos@hotmail.com',
        //     // to:'nicolass953@gmail.com',
        //     subject:'Logs de sistema ',
        //     htmlBody:`
        //     <h1>Hola!!</h1>
        //     <p>Prueba de fuerza </p>
        //     `

        // });

        // emailService.sendEmailWithFIleSystemLogs("nicolass953@gmail.com");
        // console.log("Enviado");
        // CronService.createJob(
        //     '*/5 * * * * *',
        //     ()=>{
        //         // const url = 'http://localhost:3000/';
        //         const url = 'https://google.com/';
        //         new CheckService(                
        //             mongoLogRepository,
        //             () => console.log("success"),
        //             (error) => console.log(error),
        //         ).execute(url);
        //     }
        // );        
        CronService.createJob(
            '*/5 * * * * *',
            ()=>{
                // const url = 'http://localhost:3000/';
                const url = 'https://google.com/';
                new CheckServiceMultiple(
                    [
                        fsLogRepository,
                        mongoLogRepository,
                        postgresLogRepository
                    ],
                    () => console.log("success"),
                    (error) => console.log(error),
                ).execute(url);
            }
        );        
            
    }
}