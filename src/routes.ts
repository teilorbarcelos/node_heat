import { Router } from "express"
import { UserController } from "./controllers/userController"

const router = Router()

router.post("/authenticate", new UserController().handleAuth)

export { router }