import { Router } from "express"
import { ProductController } from "@/controllers/products-controllers"

export const productsRoutes = Router()

const productsController = new ProductController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", productsController.create)
productsRoutes.put("/:id", productsController.update)
