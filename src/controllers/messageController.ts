import { Request, Response } from "express"
import { MessageService } from "../services/messageService"

class MessageController {
  async handleCreate(request: Request, response: Response) {
    const { text } = request.body
    const { user_id } = request
    const service = new MessageService()

    try {
      const result = await service.create(text, user_id)
      return response.json(result)
    } catch (error) {
      return response.json({ error: error.message })
    }

  }

  async handleGetLast3(request: Request, response: Response) {
    const service = new MessageService()

    try {
      const result = await service.getLast3()
      return response.json(result)
    } catch (error) {
      return response.json({ error: error.message })
    }

  }
}

export { MessageController }