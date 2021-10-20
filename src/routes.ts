import { Request, Response, Router } from "express"
import { MessageController } from "./controllers/messageController"
import { UserController } from "./controllers/userController"
import { onlyAuth } from "./middleware/onlyAuth"

const router = Router()

router.get("/", (request: Request, response: Response) => {
  const message = {
    message: "API created on NLW7 (HEAT) event by Rocketseat Author: Teilor Souza Barcelos",
    supportedRoutes: `/authenticate, /userProfile, /messageCreate, /getLast3Messages`,
    repository: 'https://github.com/teilorbarcelos/node_heat'
  }
  return response.json(message)
})

router.post("/authenticate", new UserController().handleAuth)
router.get("/userProfile", onlyAuth, new UserController().handleGetUserProfile)
router.post("/messageCreate", onlyAuth, new MessageController().handleCreate)
router.get("/getLast3Messages", new MessageController().handleGetLast3)

export { router }