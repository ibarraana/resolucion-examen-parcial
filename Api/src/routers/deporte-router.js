import { Router } from "express"

import { getDeportes } from "../controllers/deporte-controller.js"

export const deporteRouter = Router()

deporteRouter.get("/", getDeportes)


