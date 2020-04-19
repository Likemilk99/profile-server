// const fastify = require('fastify')
// const cors = require('cors')
// const { APP_PORT } = require('./environment')

// const app = fastify({
//   logger: { prettyPrint: true },
// })

// app.use(cors())
// require('./plugins/mongo-db')(app)

// app.register(require("./services/auth"))
// app.register(require("./routes/api"), { prefix: 'api' })

// const start = async () => {
//   try {
//     await app.listen(APP_PORT)
//   } catch (err) {
//     app.log.error(err)
//     process.exit(1)
//   }
// }
// start()

import fastify from 'fastify'
import {Server, IncomingMessage, ServerResponse} from 'http'
// import { APP_PORT } from './environment'

const app: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();

app.listen(8080, (err, address) => {
  if(err) {
    console.error(err)
    process.exit(0)
  }
  console.log(`Server listening at ${address}`)
})