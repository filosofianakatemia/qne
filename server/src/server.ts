import {ui, validate} from "swagger2-koa";
import * as Koa from "koa";
import * as Logger from "koa-logger";
import * as Router from "koa-router";
import { APIRouting } from "./api.routing";
import { Core, Options } from "qne-core";
import * as path from "path";

export interface Config {
  port: number;
  debug: boolean;
  options: Options;
}

export class Server {

  private port: number;
  private debug: boolean;
  private options: Options;
  private app: Koa;
  private router: Router;

  constructor(config: Config) {
    this.port = config.port;
    this.debug = config.debug;
    this.options = config.options;
    this.app = new Koa();
    this.router = new Router();
  }

  // PUBLIC
  public run() {
    if (this.debug) {
      this.app.use(Logger());
    }

    //this.router = swaggerRouter(path.join(__dirname, "../../../node_modules/qne-api/api.swagger.yaml"));

    // Core needs to be added to Koa state to make it visible in routes
    const core = new Core(this.debug, this.options);
    this.app.use((ctx, next) => {
      ctx.state.core = core;
      return next();
    });

    const apiRouting = new APIRouting(this.router);
    this.app.use(apiRouting.getRoutes());

    // TODO: Figure out how to host Swagger UI
    //this.app.use(ui(swaggerRouter.document))

    this.app.listen(this.port);
    console.info("listening on port " + this.port);
  }
}
