import { User } from "../../../models/User"

export default async (app, opts) => {
  app.get("/", { preValidation: [app.authenticate] }, async (req, reply) => {
    return app.db.manager.find("User")
  })

  app.post("/", async (req, reply) => {
     const result = await app.db.manager.save(User, req.body)
     reply.send(result)
  })
}
