import * as mocha from "mocha";
import { expect, should } from "chai";
import { Core, Options, Questionnaire, Action, Group, Option, Instruction, Element} from "../src/index";
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
      /*console.info(questions);*/
      expect(questions.path).to.equal("test-questionnaire");
    });
  });

  /*describe("getAction", () => {
    it("should get submit values", async function() {
      const action: Action = await core.getAction("Submit");
      expect(action.title).to.equal("Submit");
    });
  });

  describe("getGroup", () => {
    it("should get normal values", async function(){
      const group: Group = await core.getGroup("normal");
      expect(group.type).to.equal("normal");
    });
  });

  describe("getOption", () => {
    it("should get title Strongly disagree value", async function(){
      const option: Option = await core.getOption("Strongly disagree");
      expect(option.title).to.equal("Strongly disagree");
    });
  });
  describe("getInstruction", () => {
    it("should get likert value", async function(){
      const instruction: Instruction = await core.getInstruction("likert");
      expect(instruction.type).to.equal("likert");
    });
  });
  describe("getElement", () => {
    it ("should get likert value", async function(){
      const element: Element = await core.getElement("likert");
      expect(element.type).to.equal("likert");
    });
  });*/

});
