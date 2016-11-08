import {ui, router as swaggerRouter, Router, validate} from "swagger2-koa";
import * as Koa from "koa";
import * as logger from "koa-logger";
import { Routing } from "./routing";
import { Core, Options } from "qne-core";

export interface Config {
  port: number;
  debug: boolean;
  options: Options;
}

export class Server {

  private port: number;
  private debug: boolean;
  private options: Options;
  private router: Router;
  private app: Koa;

  constructor(config: Config) {
    this.port = config.port;
    this.debug = config.debug;
    this.options = config.options;
    this.router = swaggerRouter(__dirname + "../node_modules/qne-api/api.swagger.yml");
    this.app = this.router.app();
  }

  // PUBLIC
  public run() {
    if (this.debug) {
      this.app.use(logger());
    }
    const core = new Core(this.debug, this.options);
    const routing = new Routing(this.router, core)

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
