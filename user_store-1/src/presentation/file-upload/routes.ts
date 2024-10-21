import { Router } from "express";
import { FileUploadController } from "./controller";
import { FileUploadService } from "../services/file-upload.service";
import { FileUploadMiddleware } from "../middlewares/file-upload.middlewares";
import { TypeMiddleware } from "../middlewares/type.middleware";

export class FileUploadRouter {
    
    static get router(): Router {
        const router = Router();
        const controller = new FileUploadController(
            new FileUploadService()
        );        

        router.use(FileUploadMiddleware.containFiles);
        router.use(TypeMiddleware.validTypes(['users','products','categories']));

        router.post('/single/:type',controller.uploadFile);
        router.post('/multiple/:type',controller.uploadMultipleFiles);
        return router;
    }
}