import fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from "http";

import apiRoutes from "./routes/api"
import decorators from "./decorators"

const app: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({logger:true});

app.register(decorators)
app.register(apiRoutes, {prefix: 'api'})

app.listen(8080, (err, address) => {
  if(err) {
    console.error(err)
    process.exit(0)
  }
  console.log(`Server listening at ${address}`)
})