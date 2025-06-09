import { Request, Response, NextFunction } from "express"

export class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "OK" })
    } catch (error) {
      next(error)
    }
  }
}
