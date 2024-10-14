import { Request,Response } from "express";
import { CreateTodoDto, TodoRepository, UpdateTodoDto } from "../../domain";

const todos = [
    {id:1,text:'Buy milk',completedAt:new Date()},
    {id:2,text:'Buy bread',completedAt:null},
    {id:3,text:'Buy butter',completedAt:new Date()},
];
export class TodosController {
    constructor(
        private readonly todoRepository:TodoRepository,
    ) {
        
    }
    public getTodos = async (req:Request,res:Response) => {
        const todos = await this.todoRepository.getAll();
         res.json(todos);
         return;
    }
    public getTodoId = async(req:Request,res:Response) => {
        const id = +req.params.id;
        try {
            const todo = await this.todoRepository.findById(id);            
            res.json(todo)
        } catch (error) {
            res.status(404).json({error});
        }
        // (todo) ? res.json(todo) : res.status(404).json({error:"id No encontrado"});
    }
    public createTodo = async(req:Request,res:Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);
        if (error) {
            res.status(400).json({error});
            return;
        }
        const todo = await this.todoRepository.create(createTodoDto!);
        res.json(todo);
    }
    public updateTodo = async (req:Request,res:Response) => {
        const id = +req.params.id;
        const [error, updateTodoDto] = UpdateTodoDto.create({...req.body,id});
        if (error) {
            res.status(400).json({error});
            return;
        }        
        const updateTodo = await this.todoRepository.updateById(updateTodoDto!);
        res.json(updateTodo);
        return;
    }

    public deleteTodo = async(req:Request,res:Response) => {
        const id = +req.params.id;
        const deletedTodo = await this.todoRepository.deleteById(id);
        res.json(deletedTodo);
    }
}