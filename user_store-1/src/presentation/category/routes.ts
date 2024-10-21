import { Router } from "express";
import { CategoryController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middlewares";
import { CategoryService } from "../services/category.service";

export class CategoryRouter {
    
    static get router(): Router {
        const router = Router();
        const categoryService = new CategoryService();
        const controller = new CategoryController(categoryService);        
        router.get('/',controller.getCategories);
        router.post('/',[AuthMiddleware.validateJWT],controller.createCategory);
        return router;
    }
}