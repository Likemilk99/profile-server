const fastify = require('fastify')
const { APP_PORT } = require('./environment')

const app = fastify({
  logger: { prettyPrint: true },
})

require('./plugins/mongo-db')(app)

app.register(require("./services/auth"))
app.register(require("./routes/api"), { prefix: 'api' })

const start = async () => {
  try {
    await app.listen(APP_PORT)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
