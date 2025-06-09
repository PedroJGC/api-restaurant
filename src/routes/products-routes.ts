import { Router } from "express"
import { ProductController } from "@/controllers/products-controllers"

export const productsRoutes = Router()

const productsController = new ProductController()

productsRoutes.get("/", productsController.index)
