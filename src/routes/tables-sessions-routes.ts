import { Router } from "express"

import { TablesSessionsController } from "@/controllers/tables-sessions-controller"

export const tablesSessionsRoutes = Router()
const tablesSessionsController = new TablesSessionsController()

tablesSessionsRoutes.post("/", tablesSessionsController.create)
