import { Router } from "express"

import { deporteRouter } from "./deporte-router.js"

const router = Router()

router.use("/deportes", deporteRouter)

export default router

