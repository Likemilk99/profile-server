import { createConnection, Connection } from "typeorm"
import fp from "fastify-plugin"

export interface Db {
  connection: Connection
}

export default fp(async (app, opts, next) => {
  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "demo_2",
    entities: ["src/models/**/*.ts"]
  })
  await connection.synchronize()

  app.decorate("db", connection)
  //TODO: add close connection
  .addHook("onClose", async (app, done) => {
    done()
  })

  next()
})
