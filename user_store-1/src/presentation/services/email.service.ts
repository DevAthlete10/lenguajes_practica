import nodemailer, { Transporter } from 'nodemailer';

export interface SendMailOptions{
    to:string | string[],
    subject:string,
    htmlBody:string,
    attachments?:Attachment[]
}
export interface Attachment{
    filename:string;
    path:string;
}

export class EmailServiceStore {
    private transporter:Transporter;
    constructor(
        mailerService:string,
        mailerEmail:string,
        mailerEmailPassword:string,
        private readonly postToProvider:boolean,
    ) {
        this.transporter =  nodemailer.createTransport({
            service: mailerService,
            auth:{
                user:mailerEmail,
                pass:mailerEmailPassword
            }
        })
    }

    
    async sendEmail(options:SendMailOptions):Promise<boolean> {
        const {to,subject,htmlBody,attachments = []} = options;
        try {

            if (!this.postToProvider) {
                return true;
            }

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
}