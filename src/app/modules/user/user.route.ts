import express from "express"
import { UserController } from "./user.controller"

const router = express.Router()

router.post("/", UserController.createIntoDB)
router.get("/", UserController.getAllDB)
router.get("/:id", UserController.getSingleDB)

export default router