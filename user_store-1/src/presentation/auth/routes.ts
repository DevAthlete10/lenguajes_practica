import { Router } from "express";
import { AuthController } from "./controller";
import { AuthService } from "../services/auth.services";
import { EmailServiceStore } from "../services";
import { envs } from "../../config";

export class AuthRouter {
    
    static get router(): Router {
        const router = Router();
        const controller = new AuthController(
            new AuthService(
               new EmailServiceStore(
                envs.MAILER_SERVICE,
                envs.MAILER_EMAIL,
                envs.MAILER_SECRET_KEY,
                envs.SEND_EMAIL
               )
            )
        );
        router.post('/login',controller.loginUser);
        router.post('/register',controller.registerUser);
        router.get('/validate-email/:token',controller.validateEmail);
        return router;
    }
}