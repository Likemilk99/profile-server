const {
    DB_NOSQL_USER,
    DB_NOSQL_PASSWORD,
    DB_NOSQL_HOST,
    DB_NOSQL_NAME
  } = require('../environment');
  
  const MONGO_URL = `mongodb+srv://${DB_NOSQL_USER}:${DB_NOSQL_PASSWORD}@${DB_NOSQL_HOST}/${DB_NOSQL_NAME}?retryWrites=true&w=majority`;
  
  const mongoConnector = app => {
    app.register(require('fastify-mongodb'), {
      forceClose: true,
      url: MONGO_URL
    });
  };
  
  module.exports = mongoConnector;