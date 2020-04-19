import fastify from 'fastify'
import apiRoutes from './routes/api'

const app =  fastify({ logger: { prettyPrint: true } })

app.register(apiRoutes, {prefix: 'api'})
app.listen(8080, (err, address) => {
  if(err) {
    console.error(err)
    process.exit(0)
  }
  console.log(`Server listening at ${address}`)
})