import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasourceImpl } from "../../infrastructure/datasources/todo.datasource.imp";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";

export class TodosRoutes {
    static get routes(): Router{
        const router = Router() ;
        const datasource = new TodoDatasourceImpl();
        const todoRepository = new TodoRepositoryImpl(datasource);
        const todoController = new TodosController(todoRepository);
        router.get('/',todoController.getTodos);
        router.get('/:id',todoController.getTodoId);
        router.post('/',todoController.createTodo);
        router.put('/:id',todoController.updateTodo);
        router.delete('/:id',todoController.deleteTodo);
        return router;
    };
}