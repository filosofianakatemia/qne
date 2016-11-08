import { Core, Options } from "../src/index";
import * as path from "path";

const testQneOptions: Options = {
  dbName: "database_development",
  dbUsername: "root",
  dbPassword: null,
  dbOptions: {
    host: "127.0.0.1",
    dialect: "sqlite",
    storage: "./dist/test.sqlite.db",
  },
  debug: true,
};

const sequelizeFixturesPath = path.join(__dirname, "../../../test/testData.yaml");
let core = new Core(testQneOptions);
core.syncDatabase(true, sequelizeFixturesPath);
