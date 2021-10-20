import { Router } from "express"
import { MessageController } from "./controllers/messageController"
import { UserController } from "./controllers/userController"
import { onlyAuth } from "./middleware/onlyAuth"

const router = Router()

router.post("/authenticate", new UserController().handleAuth)
router.get("/userProfile", onlyAuth, new UserController().handleGetUserProfile)
router.post("/messageCreate", onlyAuth, new MessageController().handleCreate)
router.get("/getLast3Messages", new MessageController().handleGetLast3)

export { router }