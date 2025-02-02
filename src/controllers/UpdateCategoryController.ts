import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";


export class UpdateCategoryController {
    async handle( request: Request, response: Response) {
       const {id} = request.params
       const { name, description } = request.body
       const service = new UpdateCategoryService()
       const categories = await service.execute({id, name, description})
       if(categories instanceof Error) {
            return response.status(400).json(categories.message)
       }
       return response.json(categories)
    }
}