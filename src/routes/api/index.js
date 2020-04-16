const swagger = require('fastify-swagger')

const apiRoutes = async (app, opts) => {
  app.register(swagger, require('../docs'))
  app.register(require("./users"), { prefix: "users" })
  app.get("/", async (request, reply) => {
      return { text: "I am alive!" }
    })
}

module.exports = apiRoutes
