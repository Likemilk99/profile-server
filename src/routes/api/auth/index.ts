import { loginSchema, logoutSchema } from "./schemas"

const authRoutes = async (app, opts) => {
  app.post("/login", { schema: loginSchema }, async (request, reply) => {
    const payload = {
      sub: "1234567890",
      name: "John Doe",
      iat: 1516239022,
    }

    const token = app.jwt.sign({ payload })
    reply.send({ token })
  })

  app.delete("/logout", { schema: logoutSchema }, async (request, reply) => {
    return {
      status: 200,
    }
  })
}

export default authRoutes
