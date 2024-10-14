import { Request,Response } from "express";
import { CreateTodoDto, TodoRepository } from "../../domain";

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
        return res.json(todos);
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
        // const {text} = CreateTodoDto.;
        // if (!text) res.status(404).json({error:"Texto requerido"});
        // const newtodo = {
        //     id:todos.length+1,
        //     text:text,
        //     completedAt:null
        // };
        // const todo = await this.todoRepository.create()
        // todos.push(newtodo);
        // res.json(newtodo);
    }
    public updateTodo = async (req:Request,res:Response) => {
        const id = +req.params.id;
        if (isNaN(id)){
             res.status(404).json({error:"id No encontrado"});
             return;
        };
        const todo = todos.find(todo => todo.id === id);
        if (!todo){
            res.status(404).json({error:"TODO No encontrado"});
            return;
        };
        
        // const updateTodo = await this.todoRepository.updateById();

   
         return;
    }

    public deleteTodo = async(req:Request,res:Response) => {
        const id = +req.params.id;
        const deletedTodo = await this.todoRepository.deleteById(id);
        res.json(deletedTodo);
    }
}