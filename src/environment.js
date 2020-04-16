const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: path.resolve(__dirname, "../.env") })

module.exports = {
  APP_PORT: process.env.APP_PORT || 8080,
  SECRET_KEY: process.env.SECRET_KEY,
  DB_NOSQL_USER: process.env.DB_NOSQL_USER,
  DB_NOSQL_PASSWORD: process.env.DB_NOSQL_PASSWORD,
  DB_NOSQL_HOST: process.env.DB_NOSQL_HOST,
  DB_NOSQL_NAME: process.env.DB_NOSQL_NAME,
}
