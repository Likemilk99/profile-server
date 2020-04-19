import userRoutes from './users'

const apiRoutes = async(app, opts) => {
    app.register(userRoutes, { prefix: "users" })
}

export default apiRoutes