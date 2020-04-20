import fp from "fastify-plugin"
import auth from "./auth"
import connect from "./connect"

export default  fp( async (app, opts, next) => {
     app.register(auth)
     app.register(connect)
})