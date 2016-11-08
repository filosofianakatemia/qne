import {ui, router as swaggerRouter, Router, validate} from "swagger2-koa";
import * as Koa from "koa";
import * as logger from "koa-logger";
import api from "./api";
import { Options } from "qne-core";

export interface Config {
  port: number;
  debug: boolean;
  dbOptions: Options;
}

export class Server {

  private port: number;
  private debug: boolean;
  private dbOptions: Options;
  private router: Router;
  private app: Koa;

  constructor(config: Config) {
    this.port = config.port;
    this.debug = config.debug;
    this.dbOptions = config.dbOptions;
    this.router = swaggerRouter(__dirname + "../node_modules/qne-api/api.swagger.yml");
    this.app = this.router.app();
  }

  // PUBLIC
  public run() {
    if (this.debug) {
      this.app.use(logger());
    }

    // Configure routing
    api(config, app);

    // TODO: Figure out how to host Swagger UI
    //this.app.use(ui(swaggerRouter.document))

    this.app.listen(this.port);
    console.info("listening on port " + this.port);
  }
}


/**
 * setup Koa
 */
export const app: Koa = new Koa();

// debugging setup


// add server API

// listen
app.listen(3000);
