import fp from "fastify-plugin"

export default fp(async (app, opts, next) => {
  app.register(require("fastify-jwt"), {
    secret: "super_secret_key",
  })

  app.decorate("authenticate", async function (request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
  next()
})
