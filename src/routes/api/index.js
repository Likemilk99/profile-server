const apiRoutes = async (app, opts) => {
  app.register(require("fastify-oas"), require("../docs"))
  app.register(require("./auth"))
  app.register(require("./users"), { prefix: "users" })

  app.get("/", async (request, reply) => {
    return { text: "I am alive!" }
  })
}

module.exports = apiRoutes
