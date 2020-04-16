const app = require("fastify")({
  logger: { prettyPrint: true },
})

app.register(require("./services/auth"))
app.register(require("./routes/api"), { prefix: 'api' })

const start = async () => {
  try {
    await app.listen(3000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
