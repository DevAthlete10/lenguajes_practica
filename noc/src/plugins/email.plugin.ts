import nodemailer  from "nodemailer";
import { envs } from "./envs.plugin";
import { LogRepository } from "../domain/repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../domain/entities/log.entity";


interface SendMailOptions {
    to:string | string[];
    subject:string;
    htmlBody:string;
    attachments?:Attachment[];
}

interface Attachment {
    filename:string;
    path:string;
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth:{
            user:envs.MAILER_EMAIL,
            pass:envs.MAILER_SECRET_KEY
        }
    });

    constructor(
        // private readonly logRepository:LogRepository
    ) {
        
    }

    async sendEmail(options:SendMailOptions):Promise<boolean> {
        const {to,subject,htmlBody,attachments = []} = options;
        try {
            const sendInformation = await this.transporter.sendMail({
                to:to,
                subject:subject,
                html:htmlBody,
                attachments:attachments
            });            
            console.log(sendInformation);
            return true;
        } catch (error) {            
            return false;
        }
    }

    async sendEmailWithFIleSystemLogs(to:string | string[]){
        const subject = 'Log del servidor';
        const htmlBody = `
        
        `; 
        const attachments:Attachment[] = [
            {filename:"logs-all.log",path:"./logs/logs-all.log"},
            {filename:"logs-high.log",path:"./logs/logs-high.log"},
            {filename:"logs-medium.log",path:"./logs/logs-medium.log"},            
        ]

        return this.sendEmail({
            to,subject,attachments,htmlBody
        });
        
    }
    
}