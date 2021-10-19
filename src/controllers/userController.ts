import { Request, Response } from "express"
import { UserService } from "../services/userService"

class UserController {
  async handleAuth(request: Request, response: Response) {
    const { code } = request.body

    const service = new UserService()

    try {
      const result = await service.authenticate(code)
      return response.json(result)
    } catch (error) {
      return response.json({ error: error.message })
    }

  }
}

export { UserController }