const { getOneSchema, getAllSchema } = require("./schemas")

const userRoutes = async (app, opts) => {
  app.get(
    "/",
    { schema: getAllSchema, preValidation: [app.authenticate] },
    async (requst, reply) => {
      return [
        {
          id: 1,
          name: "Ivan",
        },
        {
          id: 2,
          name: "Boris",
        },
      ]
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
