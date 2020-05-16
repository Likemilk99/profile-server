import { createConnection, Connection } from "typeorm"
import {root} from "../paths"
import fp from "fastify-plugin"

export interface Db {
  connection: Connection
}

export default fp(async (app, opts, next) => {
  const connection = await createConnection({
    type: "sqlite",
    database: `${root}/data/line.sqlite`,
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
