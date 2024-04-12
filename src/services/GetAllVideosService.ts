import { AppDataSource } from "../../data-source";
import { Videos } from "../entities/Videos";

export class GetAllVideosService {
    async execute(){
        const repo = AppDataSource.getRepository(Videos)
        const video = await repo.find({
            relations: ["category"]
        })
        return video
    }
}