import { Router} from "express"
import { CreateCategoryController } from "./controllers/CreateCategoryController"
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesContreller"
import { DeleteCAtegoryCotroller } from "./controllers/DeleteCategoryController"
import { UpdateCategoryController } from "./controllers/UpdateCategoryController"
import { CreateVIdeoController } from "./controllers/CreateVideoController"
import { GetAllVideosController } from "./controllers/GetAllVideosController"

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCAtegoryCotroller().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)

routes.post("/video", new CreateVIdeoController().handle)
routes.get("/videos", new GetAllVideosController().handle)
export {routes}