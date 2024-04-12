import { Category } from "../entities/Category";
import { AppDataSource } from "../../data-source";

interface CategoryRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async execute({ name, description}: CategoryRequest): Promise<Category>{
        const repo = AppDataSource.getRepository(Category)
        const category = repo.create({
            name,
            description
        })
        
        await repo.save(category)
        return category
    }
}