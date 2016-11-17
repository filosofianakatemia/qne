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
    expect(questionnaire).to.have.json("description", "This is a questionnaire suitable for testing");
    expect(questionnaire).to.have.json("defaultLang", "en");
    expect(questionnaire).to.have.json("path", "test-questionnaire");
    expect(questionnaire).to.have.status(200);

    return chakram.wait();
  });
});
