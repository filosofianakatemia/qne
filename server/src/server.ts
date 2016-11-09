import * as Koa from "koa";
import * as Logger from "koa-logger";
import * as Router from "koa-router";
import { APIRouting } from "./api.routing";
import { Core, Options } from "qne-core";
import * as path from "path";
import * as swagger from "swagger2";
import { validate, ui } from "swagger2-koa" ;

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

  public run() {
    if (this.debug) {
      this.app.use(Logger());
    }

    // Core needs to be added to Koa state to make it visible in routes
    const core = new Core(this.debug, this.options);
    this.app.use((ctx, next) => {
      ctx.state.core = core;
      return next();
    });

    // Setup Swagger 2 validation and ui

    const swaggerDocumentPath = path.join(__dirname, "../../../node_modules/qne-api/api.swagger.yaml");
    const swaggerDocument = swagger.loadDocumentSync(swaggerDocumentPath);
    if (!swagger.validateDocument(swaggerDocument)) {
      throw Error(swaggerDocumentPath + " does not conform to the Swagger 2.0 schema");
    }
    this.app.use(validate(swaggerDocument));
    this.app.use(ui(swaggerDocument, "/qne-api", ['/qne-api/v1']));

    // Setup routing

    const apiRouting = new APIRouting(this.router);
    this.app.use(apiRouting.getRoutes());

    // Start listening

    this.app.listen(this.port);
    console.info("listening on port " + this.port);
  }
}
