import { Router } from "express";
import { TodosRoutes } from "./todos/routes";

export class AppRoutes {
    static get router(): Router{
        const router = Router();
        router.use('/api/todos',TodosRoutes.routes);
        return router;
    };
}