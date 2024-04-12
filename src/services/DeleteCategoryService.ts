import { AppDataSource } from "../../data-source";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(Category)
        await repo.delete(id)
    }
}