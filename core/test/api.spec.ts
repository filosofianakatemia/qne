import * as mocha from "mocha";
import { expect, should } from "chai";
import { Core, Options, Questionnaire, Action} from "../src/index";
import * as path from "path";

describe("API", () => {

  const testQneOptions: Options = {
    dbName: "database_development",
    dbUsername: "root",
    dbPassword: null,
    dbOptions: {
      host: "127.0.0.1",
      dialect: "sqlite",
      storage: ":memory:",
    },
  };

  const sequelizeFixturesPath = path.join(__dirname, "../../../test/testData.yaml");
  let core: Core;

  before(async function(){
    core = new Core(true, testQneOptions);
    await core.syncDatabase(true, sequelizeFixturesPath);
  });

  describe("getQuestions", () => {
    it("should get test-questionnaire values", async function () {
      const questions: Questionnaire = await core.getQuestions("test-questionnaire");
      expect(questions.path).to.equal("test-questionnaire");
    });
  });

  describe("getAction", () => {
    it("should get submit values", async function() {
      const action: Action = await core.getAction("Submit");
      expect(action.title).to.equal("Submit");
    });
  });

});
