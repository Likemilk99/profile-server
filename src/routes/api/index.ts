import oas from "fastify-oas"
import docs from "../docs"
import userRoutes from "./users"
import auth from "./auth"

const apiRoutes = async(app, opts) => {
    app.register(oas, docs)
     app.register(userRoutes, { prefix: "users" })
     app.register(auth)
}

export default apiRoutes