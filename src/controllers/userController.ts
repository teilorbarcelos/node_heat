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

  async handleGetUserProfile(request: Request, response: Response) {
    const { user_id } = request

    const service = new UserService()

    try {
      const result = await service.getUserProfile(user_id)
      return response.json(result)
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

export { UserController }