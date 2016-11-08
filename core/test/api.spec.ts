import * as mocha from "mocha";
import { expect, should } from "chai";
import { Core, Options, Questionnaire } from "../src/index";
import * as path from "path";

describe("API", () => {

  // TODO: Change these to match SQLite in-memory
  const testQneOptions: Options = {
    dbName: "database_development",
    dbUsername: "root",
    dbPassword: null,
    dbOptions: {
      host: "127.0.0.1",
      dialect: "sqlite",
      storage: "test.sqlite.db",
    },
    debug: true,
  };

  const sequelizeFixturesPath = path.join(__dirname, "../../../test/testData.yaml");
  let core: Core;

  before(async function(){
    core = new Core(testQneOptions);
    await core.syncDatabase(true, sequelizeFixturesPath);
  });

  describe("getQuestions", () => {
    it("should get test-questionnaire values", async function () {
      const questions: Questionnaire = await core.getQuestions("test-questionnaire");
      expect(questions.path).to.equal("test-questionnaire");
    });
  });
});
