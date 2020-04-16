const fp = require("fastify-plugin")
const { SECRET_KEY } = require('../environment')


module.exports = fp(async (app, opts) => {
  app.register(require("fastify-jwt"), {
    secret: SECRET_KEY,
  })

  app.decorate("authenticate", async function (request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})
