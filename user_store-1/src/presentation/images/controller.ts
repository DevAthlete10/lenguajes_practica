import path from "path";
import { Request, Response } from "express";
import { CustomError } from "../../domain";
import fs from 'fs';

export class ImageController {
    constructor() {}

    private handleError = (error:unknown,res:Response)=>{
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({error:error.message});            
        }
        return res.status(500).json({error:"Internal server error"});            
    }

     getImage = (req:Request, res:Response) => {
        const {type = '', img = ''} = req.params;
        const imagePath = path.resolve(__dirname,`../../../uploads/${type}/${img}`);
        console.log(imagePath);
        if (!fs.existsSync(imagePath)) {
            return res.status(404).send('Image not found');
        }
        res.sendFile(imagePath);
    }

}