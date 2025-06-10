import { Request, Response, NextFunction } from "express"
import { AppError } from "@/utils/AppError"

export class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      response.json({ message: "OK" })
    } catch (error) {
      next(error)
    }
  }
}
