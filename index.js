const app = require("fastify")()

app.register(require("./src/service/auth"))
app.register(require("./src/service/hello"))

const start = async () => {
  try {
    await app.listen(3000)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
