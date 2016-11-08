import {Server, Config} from  "./server";

/**
 * Load configuration file given as command line parameter
 */
let config: Config;
if (process.argv.length > 2) {
  console.info("loading configuration file: " + process.argv[2]);
  config = require(process.argv[2]);
}else {
  console.error("no configuration file provided, exiting");
  process.exit();
};
const server = new Server(config);
server.run();
