import * as fastify from "fastify";
import * as http from "http";

import {Db} from "../decorators/connect";

declare module "fastify" {
  export interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    db: Db
  }
}