const userRoutes = async (app, opts) => {
    app.get('/', async (req, reply) => {
        return [
            {
                id: 1,
                name: 'Ivan'
            }
        ]
    })
}

export default userRoutes