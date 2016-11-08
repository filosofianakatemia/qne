import {Server, Config} from  "./server";
import * as path from "path";

/**
 * Load configuration file given as command line parameter
 */
let config: Config;
if (process.argv.length > 2) {
  const configPath = path.join(__dirname, process.argv[2]);
  console.info("loading configuration file: " + configPath);
  config = require(configPath);
}else {
  console.error("no configuration file provided, exiting");
  process.exit();
};
const server = new Server(config);
server.run();
