const fp = require("fastify-plugin")

module.exports = fp(async (app, opts) => {
  app.register(require("fastify-jwt"), {
    secret: "supersecret",
  })

  app.decorate("authenticate", async function(request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})

