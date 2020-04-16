const { getOneSchema, getAllSchema } = require("./schemas")

const userRoutes = async (app, opts) => {
  app.get(
    "/",
    { schema: getAllSchema, preValidation: [app.authenticate] },
    async (requst, reply) => {
      const { mongo } = app
      const db = mongo.db
      const collection = db.collection("User")
      const users = await collection.find().toArray()
      return users
    }
  )

  app.get(
    "/:id",
    { schema: getOneSchema, preValidation: [app.authenticate] },
    async (requst, reply) => {
      const { id } = requst
      return {
        id: id,
        name: "Ivan",
      }
    }
  )
}
module.exports = userRoutes
