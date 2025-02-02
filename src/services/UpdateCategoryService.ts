import { AppDataSource } from "../../data-source";
import { Category } from "../entities/Category";


interface CategoryUpdateRequest {
    id: string;
    name: string;
    description: string;
}


export class UpdateCategoryService {
    async execute({id, name, description}: CategoryUpdateRequest) {
        const repo = AppDataSource.getRepository(Category)
        const category = await repo.findOne({ where: {id}})
        if (!category) {
            return new Error("Category does not exists!")
        }
        category.name = name ? name : category.name
        category.description = description ? name : category.description
        await repo.save(category)
        return category
    }
}