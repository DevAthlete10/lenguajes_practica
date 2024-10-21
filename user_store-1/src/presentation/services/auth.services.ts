import { bcrytAdapter, envs, JwtAdapter } from "../../config";
import { UserModel } from "../../data";
import { CustomError, RegisterUserDto,LoginUserDto, UserEntity } from "../../domain";
import { EmailServiceStore } from "./email.service";

export class AuthService {
    constructor(
        private readonly emailService: EmailServiceStore
    ) {
        
    }

    public async registerUser(registerUserDto:RegisterUserDto){
        const existUser = await UserModel.findOne({email:registerUserDto.email});
        if (existUser) throw CustomError.badRequest('Email already exist');
        try {
            const user = new UserModel(registerUserDto);

            user.password = bcrytAdapter.hash(registerUserDto.password);

            await user.save();

            
            const {password,...userData} = UserEntity.fromObject(user);
            
            const token = await JwtAdapter.generateToken({id:user.id});
            if(!token) throw CustomError.internalServer('error while creating JWT');
            // const {tokenString} = token as {tokenString:string};
            await this.sendEmailValidationLink(user.email, token as string);
            
            return {userData, token};
        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        }
    }
    public async loginUser(loginUserDto:LoginUserDto){
        const user = await UserModel.findOne({email:loginUserDto.email});
        if (!user) throw CustomError.badRequest('Usuario no existe');
        if (!bcrytAdapter.compare(loginUserDto.password,user.password)) throw CustomError.badRequest('Contraseña incorrecta');
        
        try {        
            const {password,...userData} = UserEntity.fromObject(user);
            const token = await JwtAdapter.generateToken({id:user.id});

            if(!token) throw CustomError.internalServer('error while creating JWT');
            return {userData,token};
        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        }
    }   

    public validateEmail = async(token:string) => {
        const payload = await JwtAdapter.validateToken(token);
        if(!payload) throw CustomError.unauthorized("Invalid token");
            console.log(payload);
        
        const {id} = payload as {id:string};
            
        if(!id) throw CustomError.internalServer("Email not in token");
            
        const user = await UserModel.findOne({_id:id});
        if(!user) throw CustomError.internalServer("Email not exists");

        user.emailValidated = true;

        await user.save();

        return true;

    }

    private sendEmailValidationLink = async(email:string,tokenGenarado:string) =>{
        const isToken = await JwtAdapter.validateToken(tokenGenarado);
        console.log({email, tokenGenarado, isToken});
        if(!isToken) return CustomError.internalServer("Error getting token");
        const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${tokenGenarado}`;
        const html = `
            <h1>Validate email</h1>
            <p>Click on the following link to validate your email</p>
            <a href="${link}">Validate you email: ${email}</a>
        `;
        const options = {
            to:email,
            subject:"validado perrito",
            htmlBody:html
        }

        const isSent = await this.emailService.sendEmail(options);
        if ( !isSent ) throw CustomError.internalServer('Error sending email');
        return true ;
    }
}