module.exports = async (app, opts) => {
  app.get(
    "/",
    {
      preValidation: [app.authenticate],
    },
    async (request, reply) => {
      return { hello: "world" }
    }
  )
}
