import * as chakram from "chakram";
const expect = chakram.expect;

describe("qne server API", () => {
  let pollingInterval;
  before(function (done) {
    // Set one minute as timeout for tests
    this.timeout(60000);
    pollingInterval = setInterval(function(){
      chakram.get("http://localhost:3000/v1").then(function(response){
        if (!response.error) {
          clearInterval(pollingInterval);
          done();
        }
      });
    }, 500);
  });

  it("should return valid questions from GET qne-api/v1/questions/test-questionnaire", function () {
    const questionnaire = chakram.get("http://localhost:3000/qne-api/v1/questions/test-questionnaire");
    expect(questionnaire).to.have.json("uuid", "223e469e-1118-4155-bdc8-af43a505b167");
    expect(questionnaire).to.have.json("title", "Test Questionnaire");
    expect(questionnaire).to.have.json("submit", "efabf3d2-2f69-4419-9a9c-05f69261c876");
    expect(questionnaire).to.have.json("description", "This is a questionnaire suitable for testing");
    expect(questionnaire).to.have.json("defaultLang", "en");
    expect(questionnaire).to.have.json("path", "test-questionnaire");
    expect(questionnaire).to.have.json("i18n", function(i18ns){
      const i18nIKnow = i18ns.find(i18n => i18n.title === "Testikysely");
      expect(i18nIKnow.lang).to.equal("fi");
    });
    expect(questionnaire).to.have.json("actions", function(actions){
      const actionIKnow = actions.find(action => action.uuid === "3b99828b-852b-478a-a976-84b51a3214b8");
      expect(actionIKnow.type).to.equal("button");
      expect(actionIKnow.title).to.equal("Begin");
      expect(actionIKnow.i18n[0].lang).to.equal("fi");
      expect(actionIKnow.i18n[0].title).to.equal("Aloita");
   });
    expect(questionnaire).to.have.json("groups", function(groups){
      const groupIKnow = groups.find(group => group.uuid === "dbe8a9e1-65bb-4f32-b553-ec95ea26a847");
      expect(groupIKnow.type).to.equal("normal");
      expect(groupIKnow.elements[1].uuid).to.equal("878ee544-6b3b-4588-b6af-e5046501ff8b");
      expect(groupIKnow.elements[1].title).to.equal("I love filling out this questionnaire");
      expect(groupIKnow.elements[1].description).to.equal(
        "(Because this is the middle question of a normal group, I should kinda see the previous and next question)");
      expect(groupIKnow.elements[1].type).to.equal("likert");
      expect(groupIKnow.elements[1].required).to.equal(true);
      expect(groupIKnow.elements[1].instruction).to.equal("e1ccbcee-a8f6-41ee-80d3-f0c1b7788f15");
      expect(groupIKnow.elements[1].i18n[0].lang).to.equal("fi");
      expect(groupIKnow.elements[1].i18n[0].title).to.equal("Rakastan tähän kyselyyn vastaamista");
    });
    expect(questionnaire).to.have.json("instructions", function(instructions){
      const instructionIKnow = instructions.find(
        instruction => instruction.uuid === "e1ccbcee-a8f6-41ee-80d3-f0c1b7788f15");
      expect(instructionIKnow.title).to.equal("Choose the value that matches reality");
      expect(instructionIKnow.description).to.equal("Don\'t overthink, the first answer is probably the right one");
      expect(instructionIKnow.options[4].value).to.equal(5);
      expect(instructionIKnow.options[4].title).to.equal("Strongly agree");
      expect(instructionIKnow.options[4].i18n[0].lang).to.equal("fi");
      expect(instructionIKnow.options[4].i18n[0].title).to.equal("Vahvasti samaa mieltä");
    });
    expect(questionnaire).to.have.status(200);

    return chakram.wait();
  });
});
