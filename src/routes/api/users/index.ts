import { User } from "../../../models/User"
import { userSchema } from "./schemas"

export default async (app, opts) => {
  app.get("/", { preValidation: [app.authenticate] }, async (req, reply) => {
    return app.db.manager.find("User")
  })

  app.post(
    "/",
    { schema: userSchema, preValidation: [app.authenticate] },
    async (req, reply) => {
      const result = await app.db.manager.save(User, req.body)
      reply.send(result)
    }
  )
}
